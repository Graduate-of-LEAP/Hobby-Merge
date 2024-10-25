"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { UserContextProvider } from "@/components/utils/AuthProvider";
import { useEffect, useState } from "react";
import { HobbyProvider } from "@/components/utils/HobbyProvider";
import { PostHeader } from "@/components/main/assets/PostHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  if (!isClient) return null;
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <HobbyProvider>
            <div>{children}</div>
            <ToastContainer />
          </HobbyProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
