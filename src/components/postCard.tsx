import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function PostCard({
  postId,
  postName,
  postDescription,
  postDetails,
  postFooter,
}: {
  postId: number | undefined;
  postName: string | undefined;
  postDescription: string | undefined;
  postDetails: string | undefined;
  postFooter: string | undefined;
}) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/posts/${postId}`)}
      className="bg-slate-900 hover:shadow-md hover:shadow-slate-900"
      key={postId}
    >
      <CardHeader>
        <CardTitle>{postName}</CardTitle>
        <CardDescription>{postDescription}</CardDescription>
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
        <p>{postDetails}</p>
      </CardContent>
      <CardFooter>
        <p>{postFooter}</p>
      </CardFooter>
    </Card>
  );
}
