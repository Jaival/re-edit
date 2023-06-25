"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-row gap-10 items-start justify-center p-24">
      <div className="flex w-2/3 items-center justify-center">Main Page</div>
      <Separator
        orientation="vertical"
        className="bg-violet-400 min-h-screen"
      />
      <div className="flex w-1/3 items-center justify-center">
        <Button onClick={() => router.push("/newcollection")}>
          <PlusCircle className="h-4 w-4" /> &nbsp; New Collection
        </Button>
      </div>
    </main>
  );
}
