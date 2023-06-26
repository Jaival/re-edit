"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import postData from "@/data/post";
import { useRouter } from "next/navigation";

const Collections = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10">
      <div className="w-1/2">
        <Input placeholder="Search" />
      </div>
      <div className="flex flex-col items-center justify-start gap-10">
        <div>Recommended Posts</div>
        <div className="flex flex-col gap-10">
          {postData.map((post: any, idx: number) => (
            <Card
              onClick={() => router.push(`/collections/${post.id}`)}
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
    </div>
  );
};

export default Collections;
