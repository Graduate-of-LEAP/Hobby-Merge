"use client";

import {
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
  useContext,
} from "react";
import { api } from "../../lib/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  cover_image: string;
  category: Category[];
  hobby: string[];
  reaction: Reaction[];
  lastLogin: Date;
  isVerified: boolean;
};

export type Category = {
  _id: string;
  name: string;
  image: string;
  hobby: Hobby[];
};

export type Hobby = {
  _id: string;
  name: string;
  description: string;
  cover_image: string;
  category: string;
  users: User[];
  posts: Post[];
  messages: HobbyMessage[];
};

export type Reaction = {
  _id: string;
  reaction: string;
};

type Post = {
  _id: string;
  user: User;
  content: string;
  postImages: [string];
  viewCount: number;
  reaction: Reaction;
  comments: Comment;
  // hobby: Hobby;
};

type HobbyMessage = {
  _id: string;
  message: string;
  hobby: Hobby;
  user: User;
  posts: Post[];
};

type Comment = {
  _id: string;
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
  user: User;
  setUser: (user: User) => void;
  LogOut: () => void;
  getUser: () => void;
  register: (newUser: NewUser) => void;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({} as User);
  const [, setLoading] = useState(true);
  const router = useRouter();
  const register = async (newUser: NewUser) => {
    try {
      const response = await api.post("/auth/register", newUser);
      console.log("Registration response:", response.data);

      const { token, user: registeredUser } = response.data;
      if (!registeredUser) {
        throw new Error("User data is not available in the response");
      }

      setUser({ ...registeredUser });

      toast.success("Бүртгэл амжилттай!");
      router.push("/category");
      localStorage.setItem("token", token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Log the error response
        console.error("Registration error response:", error.response?.data);
      } else {
        console.error("Unexpected registration error:", error);
      }
      toast.error("Бүртгэлтэй байна!");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user: loggedInUser } = response.data;

      // Update user state and set token in local storage
      setUser({ ...loggedInUser, isAuthenticated: true });
      localStorage.setItem("token", token);

      // Use loggedInUser.role instead of user?.role to avoid async issue
      if (loggedInUser.role === "ADMIN") {
        router.push("/admin");
      } else if (loggedInUser.role === "USER") {
        router.push("/");
      }

      toast.success("Нэвтрэлт амжилттай!");
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

      console.log("Fetching user with token:", token);
      const response = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User fetch response:", response.data.user);
      setUser(response.data.user);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const LogOut = async () => {
    try {
      localStorage.removeItem("token");
      setUser({} as User);
      toast.success("You have been logged out successfully.");
    } catch (error) {
      console.error("Logout error", error);
      toast.error("Log out failed.");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/landing"); // Redirect to landing page if no token
        setLoading(false);
        return;
      }

      try {
        await getUser();
      } catch (error) {
        console.error("Failed to fetch user:", error);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
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
