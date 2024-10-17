"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { UserContextProvider } from "@/components/utils/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <div>{children}</div>
          <ToastContainer />
        </UserContextProvider>
      </body>
    </html>
  );
}
