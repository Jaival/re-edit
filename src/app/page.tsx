"use client";
import CollectionCard from "@/components/collectionCard";
import PostCard from "@/components/postCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import collectionData from "@/data/collection";
import postData from "@/data/post";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-row gap-10 items-start justify-center p-24">
      <div className="flex flex-col w-2/3 items-center justify-center">
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
      <Separator
        orientation="vertical"
        className="bg-violet-400 min-h-screen"
      />
      <div className="flex flex-col gap-10 w-1/3 items-center justify-center">
        <Button onClick={() => router.push("/collections/newcollection")}>
          <PlusCircle className="mr-2 h-4 w-4" /> New Collection
        </Button>
        <div className="flex flex-col gap-10 items-center justify-center">
          {collectionData.map((collection: any, idx: number) => (
            <CollectionCard
              key={idx}
              collectionId={collection.id}
              collectionName={collection.collectionName}
              collectionDescription={collection.collectionDescription}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
