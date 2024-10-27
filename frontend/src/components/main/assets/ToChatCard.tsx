import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

interface ToChatCardProps {
    message: string;
}
export const ToChatCard = ({ message }: ToChatCardProps) => {
    return (
        <div className='w-full flex justify-start items-end gap-2'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='border border-black px-4 py-2 h-fit text-sm rounded-full rounded-bl-none max-w-48 mb-4'>{message}</div>
        </div>
    )
}
