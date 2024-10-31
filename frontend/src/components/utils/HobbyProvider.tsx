"use client";

import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import io, { Socket } from "socket.io-client";
import { useUser } from "./AuthProvider";
import { api } from "@/lib/axios";

interface HobbyContextType {
  reciver: string | undefined;
  messages: Message[];
  whoTyping: string | null;
  hobby: Hobby;
  setMyHobby: Dispatch<SetStateAction<string>>;
  setReciver: Dispatch<SetStateAction<string | undefined>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
  socket: React.MutableRefObject<Socket | null>;
} // useEffect(() => {
//   if (!loading) {
//     if (!user) {
//     } else if (user?.role === "ADMIN") {
//       router.push("/admin");
//     } else if (user?.category?.length === 0) {
//       router.push("/category");
//     } else {
//       router.push("/");
//     }
//   }
// }, [user, loading, router]);
interface Message {
  from: string;
  message: string;
}
interface TypingInfo {
  from: string;
  to: string;
}
export type Hobby = {
  _id: string;
  name: string;
  description: string;
  cover_image: string;
  category: string;
  users: User[];
  posts: string[];
  messages: string[];
};
export type User = {
  _id: string;
  name: string;
  email: string;
  cover_image: string;
}

const HobbyContext = createContext<HobbyContextType>({} as HobbyContextType);

export const HobbyProvider = ({ children }: PropsWithChildren) => {
  const { user } = useUser();
  const [reciver, setReciver] = useState<string | undefined>(undefined);
  const [myHobby, setMyHobby] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [whoTyping, setWhoTyping] = useState<string | null>(null);
  const [hobby, setHobby] = useState<Hobby>({} as Hobby)
  const socket = useRef<Socket | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found");
      return;
    }
    socket.current = io("https://hobby-merge-socket.onrender.com", {
      auth: {
        token,
      },
    });
    socket.current.on("messageReceived", (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    socket.current.on("userTyping", (whoType: TypingInfo) => {
      if (whoType.to === user?._id) {
        setWhoTyping(whoType.from);
      }
      setTimeout(() => setWhoTyping(null), 2000);
    });
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [user]);
  useEffect(() => {
    const getUserMessagesUserID = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found");
          return;
        }
        const res = await api.get(`/user/message/user/${reciver}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    const getHobbyMessagesHobbyID = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found");
          return;
        }
        const res = await api.get(`/hobby/message/hobby/${myHobby}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (reciver) {
      getUserMessagesUserID();
    } else {
      getHobbyMessagesHobbyID();
    }
  }, [reciver, user, myHobby]);
  useEffect(() => {
    const getHobbyForUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found");
          return;
        }
        const res = await api.get(`/hobby/${myHobby}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHobby(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getHobbyForUser();
  }, [myHobby]);
  useEffect(() => {
    if (user.hobby) {
      setMyHobby(user.hobby[0]);
    }
  }, [user.hobby])
  return (
    <HobbyContext.Provider
      value={{ reciver, hobby, messages, whoTyping, setMyHobby, setReciver, setMessages, socket }}
    >
      {children}
    </HobbyContext.Provider>
  );
};
export const useHobby = () => useContext(HobbyContext);
