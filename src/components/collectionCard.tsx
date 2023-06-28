import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function CollectionCard({
  collectionId,
  collectionName,
  collectionDescription,
}: {
  collectionId: number | undefined;
  collectionName: string | undefined;
  collectionDescription: string | undefined;
}) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/collections/${collectionId}`)}
      className="bg-slate-900 hover:shadow-md hover:shadow-slate-900"
      key={collectionId}
    >
      <CardHeader>
        <CardTitle>{collectionName}</CardTitle>
        <CardDescription>{collectionDescription}</CardDescription>
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
      </CardContent>
    </Card>
  );
}
