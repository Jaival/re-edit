"use client";
import CollectionCard from "@/components/collectionCard";
import { Input } from "@/components/ui/input";
import collectionData from "@/data/collection";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10">
      <div className="w-1/2">
        <Input placeholder="Search" />
      </div>
      <div className="flex flex-col items-center justify-start gap-10">
        <div>Recommended Collections</div>
        <div className="flex flex-col gap-10">
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
    </div>
  );
};

export default Collections;
