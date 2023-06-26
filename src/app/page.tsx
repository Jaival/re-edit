"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
            <Card
              onClick={() => router.push(`/posts/${post.id}`)}
              className="bg-slate-900 hover:shadow-md hover:shadow-slate-900"
              key={idx}
            >
              <CardHeader>
                <CardTitle>{post.postName}</CardTitle>
                <CardDescription>{post.postDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="container">
                  <Image
                    className="h-full"
                    alt="Post Image"
                    src={post.imageUrl}
                    width={250}
                    height={250}
                  />
                </div> */}
                <p>{post.postDetails}</p>
              </CardContent>
              <CardFooter>
                <p>{post.postFooter}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Separator
        orientation="vertical"
        className="bg-violet-400 min-h-screen"
      />
      <div className="flex w-1/3 items-center justify-center">
        <Button onClick={() => router.push("/collections/newcollection")}>
          <PlusCircle className="mr-2 h-4 w-4" /> New Collection
        </Button>
      </div>
    </main>
  );
}
