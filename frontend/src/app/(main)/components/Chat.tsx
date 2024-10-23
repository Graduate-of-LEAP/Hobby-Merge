"use client";
import { api } from '@/components/lib/axios';
import { useUser } from '@/components/utils/AuthProvider';
import React, { useEffect, useRef, useState } from 'react'
import io, { Socket } from "socket.io-client";

interface Message {
    from: string;
    message: string;
}

interface User {
    _id: string;
    friends: string[];
}

interface TypingInfo {
    from: string;
    to: string;
}

export const Chat = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [friend, setFriend] = useState<string | null>("67107bc9ab78a618bb0a27c9");
    const [userTyping, setUserTyping] = useState<string | null>(null);
    const { user } = useUser();
    const socket = useRef<Socket | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.warn("No token found");
            return;
        }
        socket.current = io("http://localhost:3005", {
            auth: {
                token,
            },
        });

        socket.current.on("messageReceived", (newMessage: Message) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.current.on("userTyping", (whoTyping: TypingInfo) => {

            if (whoTyping.to === user._id) {
                setUserTyping(whoTyping.from);
            }
            setTimeout(() => setUserTyping(null), 2000);
        });
        return () => {
            if (socket.current) {
                socket.current.disconnect();
            }
        };
    }, [message, user]);
    const createMessage = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("No token found");
                return;
            }
            const res = await api.post(
                "/user/message",
                {
                    to: friend,
                    message,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res.status === 201) {
                const sentMessage = { from: user._id, message: message };
                socket.current?.emit("sendMessage", sentMessage);
                setMessages((prevMessages) => [...prevMessages, sentMessage]);
                setMessage("");
                console.log("Message sent successfully:", res.data);
            } else {
                console.error("Failed to send message:", res.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        const getUserMessagesUserID = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.warn("No token found");
                    return;
                }
                const res = await api.get(`/user/message/user/${friend}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessages(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        if (friend) {
            getUserMessagesUserID();
        }
    }, [friend, user]);
    return (
        <div className='w-96 h-screen bg-gray-50 flex flex-col justify-between'>
            <div>

            </div>
            <div className=''>
                <div className='bg-green-100 h-12 px-4 py-1 flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <p>Name</p>
                        <p className='text-xs'>active</p>
                    </div>
                    <button>friends</button>
                </div>
                <div className='h-96'>
                    {messages.map((item, index) => (
                        <div
                            className={
                                item.from === user._id
                                    ? "text-green-400 text-end"
                                    : ""
                            }
                            key={index}
                        >
                            {item.message}
                        </div>
                    ))}
                    {userTyping ? (
                        <div className="text-green-300 text-xs">Typing...</div>
                    ) : null}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createMessage();
                }} className='bg-green-100 h-12 flex justify-between px-4 py-2'>
                    <input className='rounded-full px-4 w-72' value={message}
                        onChange={(e) => {
                            socket.current?.emit("typing", {
                                from: user._id,
                                to: friend,
                            });
                            setMessage(e.target.value);
                        }} type='text' placeholder='Write a message...' />
                    <button type='submit' className='bg-green-500 rounded-full p-1'>Send</button>
                </form>
            </div>
        </div>
    )
}
