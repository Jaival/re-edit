"use client";
import PostCard from "@/components/postCard";
import postData from "@/data/post";

export default function Posts({ params }: { params: { id: number } }) {
  const post = postData.at(params.id - 1);
  return (
    <main className="flex min-h-screen flex-row gap-10 items-start justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
          {
            <PostCard
              postId={post?.id}
              postName={post?.postName}
              postDescription={post?.postDescription}
              postDetails={post?.postDetails}
              postFooter={post?.postFooter}
            />
          }
        </div>
      </div>
    </main>
  );
}
