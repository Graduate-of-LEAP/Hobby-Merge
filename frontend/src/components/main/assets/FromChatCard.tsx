"use client"
import { useUser } from '@/components/utils/AuthProvider';
import Image from 'next/image';
import React from 'react'

interface FromChatCardProps {
    message: string;
}

export const FromChatCard = ({ message }: FromChatCardProps) => {
    const { user } = useUser()
    return (
        <div className='w-full flex justify-end items-end gap-2'>
            <div className='border border-black px-4 py-2 h-fit text-sm rounded-full rounded-br-none max-w-48 mb-4'>{message}</div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                    src={user.cover_image || "/2.jpg"}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="ci"
                />
            </div>
        </div>
    )
}
