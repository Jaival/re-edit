"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import postData from "@/data/post";

export default function Collection({ params }: { params: { id: number } }) {
  const post = postData.at(params.id - 1);
  return (
    <main className="flex min-h-screen flex-row gap-10 items-start justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
          {
            <Card className="bg-slate-900" key={post?.id}>
              <CardHeader>
                <CardTitle>{post?.postName}</CardTitle>
                <CardDescription>{post?.postDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* 
                <div className="container">
                  <Image
                    className="h-full"
                    alt="Post Image"
                    src={post.imageUrl}
                    width={250}
                    height={250}
                  />
                </div> 
                */}
                <p>{post?.postDetails}</p>
              </CardContent>
              <CardFooter>
                <p>{post?.postFooter}</p>
              </CardFooter>
            </Card>
          }
        </div>
      </div>
    </main>
  );
}
