"use client";
import CollectionCard from "@/components/collectionCard";
import collectionData from "@/data/collection";

export default function Collection({ params }: { params: { id: number } }) {
  const collection = collectionData.at(params.id - 1);
  return (
    <main className="flex min-h-screen flex-row gap-10 items-start justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
          {
            <CollectionCard
              collectionId={collection?.id}
              collectionName={collection?.collectionName}
              collectionDescription={collection?.collectionDescription}
            />
          }
        </div>
      </div>
    </main>
  );
}
