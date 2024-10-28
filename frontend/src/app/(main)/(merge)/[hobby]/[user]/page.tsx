"use client"
import { useParams } from "next/navigation"

export default function HobbyUser() {
    const { hobby, user } = useParams()
    return (
        <div>Та {hobby} дотор байна {user}</div>
    )
}