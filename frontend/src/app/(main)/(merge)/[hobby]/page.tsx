"use client"
import { useParams } from "next/navigation";

export default function Hobby() {
    const { hobby } = useParams()
    return (
        <div>
            Та {hobby}
        </div>
    );
}
