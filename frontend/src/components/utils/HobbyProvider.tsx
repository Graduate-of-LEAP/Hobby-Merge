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
  reciver: string;
  messages: Message[];
  whoTyping: string | null;
  setReciver: Dispatch<SetStateAction<string>>;
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
const HobbyContext = createContext<HobbyContextType>({} as HobbyContextType);

export const HobbyProvider = ({ children }: PropsWithChildren) => {
  const [reciver, setReciver] = useState<string>("67185659f242c92212f3159d");
  const [messages, setMessages] = useState<Message[]>([]);
  const [whoTyping, setWhoTyping] = useState<string | null>(null);
  const socket = useRef<Socket | null>(null);
  const { user } = useUser();
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
    if (reciver) {
      getUserMessagesUserID();
    }
  }, [reciver, user]);
  return (
    <HobbyContext.Provider
      value={{ reciver, messages, whoTyping, setReciver, setMessages, socket }}
    >
      {children}
    </HobbyContext.Provider>
  );
};
export const useHobby = () => useContext(HobbyContext);
