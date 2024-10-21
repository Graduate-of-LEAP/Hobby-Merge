"use client";

import {
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
  useContext,
} from "react";
import { api } from "../lib/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  category: Category[];
  collection: Collection[];
  reaction: Reaction[];
  lastLogin: Date;
  isVerified: boolean;
};

type Category = {
  id: string;
  name: string;
  image: string;
  collection: Collection[];
};

type Collection = {
  id: string;
  name: string;
  description: string;
  cover_image: string;
  users: User[];
  posts: Post[];
  messages: CollectionMessage[];
};
type Reaction = {
  id: string;
  reaction: string;
};
type Post = {
  id: string;
  user: User;
  content: string;
  postImages: [string];
  viewCount: number;
  reaction: Reaction;
  comments: Comment;
};
type CollectionMessage = {
  id: string;
  message: string;
  collection: Collection;
  user: User;
  posts: Post[];
};
type Comment = {
  id: string;
  content: string;
  post: Post;
  user: User;
};

type NewUser = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

export interface UserContextType {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  LogOut: () => void;
  getUser: () => void;
  register: (newUser: NewUser) => void;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  const register = async (newUser: NewUser) => {
    try {
      const response = await api.post("/auth/register", newUser);
      console.log("Registration response:", response);
      const { token, user: registeredUser } = response.data;

      setUser({ ...registeredUser });

      const redirectPath =
        registeredUser.role === "ADMIN" ? "/admin" : "/login";
      router.push(redirectPath);
      toast.success("Бүртгэл амжилттай!");
      localStorage.setItem("token", token);
      console.log("Token being sent:", token);
    } catch (error) {
      toast.error("Бүртгэлтэй байна!");
      console.error("Бүртгэлийн алдаа:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user: loggedInUser } = response.data;
      console.log(response.data);

      setUser({ ...loggedInUser, isAuthenticated: true });

      const redirectPath = loggedInUser.role === "ADMIN" ? "/admin" : "/";
      router.push(redirectPath);
      toast.success("Нэвтрэлт амжилттай!");
      localStorage.setItem("token", token);
    } catch (error) {
      toast.error("Нууц үг эсвэл майл буруу байна!");
      console.error("Нэвтрэх алдаа:", error);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found, skipping user fetch.");
        return;
      }

      const response = await api.get("/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const LogOut = async () => {
    try {
      localStorage.removeItem("token");
      setUser(undefined);
      toast.success("You have been logged out successfully.");
    } catch (error) {
      console.error("Logout error", error);
      toast.error("Log out failed.");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, getUser, setUser, LogOut, register, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
