"use client";
import PostCard from "@/components/postCard";
import { Input } from "@/components/ui/input";
import postData from "@/data/post";

const Posts = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10">
      <div className="w-1/2">
        <Input placeholder="Search" />
      </div>
      <div className="flex flex-col items-center justify-start gap-10">
        <div>Recommended Posts</div>
        <div className="flex flex-col gap-10">
          {postData.map((post: any, idx: number) => (
            <PostCard
              key={idx}
              postId={post.id}
              postName={post.postName}
              postDescription={post.postDescription}
              postDetails={post.postDetails}
              postFooter={post.postFooter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
