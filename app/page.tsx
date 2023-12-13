import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-24">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <NavBar/>
      <Button>Login</Button>
    </main>
  );
}
