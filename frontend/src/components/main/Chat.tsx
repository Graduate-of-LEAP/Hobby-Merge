import React from 'react'
import { MainChat } from './assets'

export const Chat = () => {
    return (
        <div className='flex flex-col justify-between w-80'>
            <div>Search</div>
            <div>suggest</div>
            <MainChat />
        </div>
    )
}
