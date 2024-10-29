"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useRef } from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FromChatCard } from './FromChatCard';
import { ToChatCard } from './ToChatCard';

export const MainChat = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
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
            <div className='border-2 border-[#D8EBF5] h-72 overflow-y-scroll'>
                <FromChatCard />
                <ToChatCard />
                <FromChatCard />
                <ToChatCard />
                <FromChatCard />
                <ToChatCard />
                <FromChatCard />
                <ToChatCard />
                <ToChatCard />
                <ToChatCard />
            </div>
            <div className='flex items-center gap-2 p-2 bg-[#D8EBF5]'>
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
                <Input className='bg-white rounded-full' placeholder='Message...' />
                <GrAttachment className='text-2xl cursor-pointer' onClick={handleAttachmentClick} />
                <input type="file" ref={fileInputRef} className='hidden' onChange={handleFile} />
            </div>
        </div>
    )
}
