import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

interface FromChatCardProps {
    message: string;
}

export const FromChatCard = ({ message }: FromChatCardProps) => {
    return (
        <div className='w-full flex justify-end items-end gap-2'>
            <div className='border border-black px-4 py-2 h-fit text-sm rounded-full rounded-br-none max-w-48 mb-4'>{message}</div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}
