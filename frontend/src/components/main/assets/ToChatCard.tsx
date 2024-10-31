import Image from 'next/image';
import React from 'react'

interface ToChatCardProps {
    message: string;
    image?: string;
}
export const ToChatCard = ({ message, image }: ToChatCardProps) => {
    return (
        <div className='w-full flex justify-start items-end gap-2'>
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                    src={image || "/2.jpg"}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="ci"
                />
            </div>

            <div className='border border-black px-4 py-2 h-fit text-sm rounded-full rounded-bl-none max-w-48 mb-4'>{message}</div>
        </div>
    )
}
