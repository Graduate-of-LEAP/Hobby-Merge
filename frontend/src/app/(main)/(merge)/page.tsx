import { PostFooter } from "@/components/main/assets/PostFooter";
import { PostHeader } from "@/components/main/assets/PostHeader";

export default function Home() {
  return (
    <div className="flex flex-col justify-between w-full">
      <PostHeader />
      <PostFooter />
    </div>
  );
}
