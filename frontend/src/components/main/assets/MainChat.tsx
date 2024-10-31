"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { FromChatCard } from './FromChatCard';
import { ToChatCard } from './ToChatCard';
import { useUser } from '@/components/utils/AuthProvider';
import { api } from '@/lib/axios';
import { useHobby } from '@/components/utils/HobbyProvider';
import { toast } from 'react-toastify';

export const MainChat = () => {
    const [typing, setTyping] = useState<boolean>()
    const [message, setMessage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const chatRef = useRef<HTMLDivElement>(null);
    const { user } = useUser();
    const { socket, reciver, messages, setMessages } = useHobby();
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
                    to: reciver,
                    message,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res.status === 201) {
                const sentMessage = { from: user?._id || "", message: message };
                socket.current?.emit("sendMessage", sentMessage);
                setMessages((prevMessages) => [...prevMessages, sentMessage]);
                setMessage("");
                console.log("Message sent successfully");
            } else {
                toast.error("Failed to send message")
            }
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);
    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        console.log(files)
    }
    const handleAttachmentClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <div>
            <div className='flex items-center p-2 bg-[#D8EBF5] rounded-t-xl'>
                <div className='flex gap-2'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p>Dulguun</p>
                        <p className='text-xs text-green-400'>active</p>
                    </div>
                </div>
            </div>
            <div ref={chatRef} className='border-2 border-[#D8EBF5] h-72 overflow-y-scroll'>
                {messages.length === 0 ? <div className='flex flex-col items-center justify-center h-full'><Avatar >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                    Dulguun</div> : null}
                {messages.map((msg, index) => (
                    <div key={index}>
                        {msg.from === user?._id ? <FromChatCard message={msg.message} /> : <ToChatCard message={msg.message} />}
                    </div>
                ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); createMessage(); }} className='flex items-center gap-2 p-2 bg-[#D8EBF5]'>
                <DropdownMenu >
                    <DropdownMenuTrigger className='border-none rounded-none'>
                        <BsEmojiSmile className='text-2xl cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mb-2 ml-48">
                        <DropdownMenuGroup>
                            Icons
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Input onFocus={() => setTyping(true)} onBlur={() => setTyping(false)} value={message}
                    onChange={(e) => {
                        // socket.current?.emit("typing", {
                        //     from: user._id,
                        //     to: reciver,
                        // });
                        setMessage(e.target.value);
                    }} className='bg-white rounded-full' placeholder='Message...' />
                {typing ? <button type='submit' className='p-1'><IoSend /></button> : <>
                    <GrAttachment className='text-2xl cursor-pointer' onClick={handleAttachmentClick} />
                    <input type="file" ref={fileInputRef} className='hidden' onChange={handleFile} />
                </>}
            </form>
        </div>
    )
}
