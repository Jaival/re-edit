import { Input } from "@/components/ui/input";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10">
      <div className="w-1/2">
        <Input placeholder="Search" />
      </div>
      <div>New Collections</div>
    </div>
  );
};

export default Collections;
