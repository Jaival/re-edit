"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex h-fit bg-secondary justify-between items-center">
      <div className="p-5">
        <Link href={"/"}>Re-edit</Link>
      </div>
      <div className="flex py-5">
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href={"/collections"}>Collections</Link>
            </li>
            <li>
              <Link href={"/posts"}>Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-5 flex gap-4">
        <Button onClick={() => router.push("/signup")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
