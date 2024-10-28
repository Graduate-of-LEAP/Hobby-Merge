import { Chat, SideBar } from "@/components/main";
import { PropsWithChildren } from "react";

export default function MergeLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-between gap-12 h-screen">
            <SideBar />
            <div>
                {children}
            </div>
            <Chat />
        </div>
    );
}