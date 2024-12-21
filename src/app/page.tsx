import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <p className="text-7xl">Your Complete Platform for Calisthenics.</p>
        <p className="text-lg">[placeholder] provides a highly customizable, personalized, and rigorously tested approach to getting you into calisthenics shape.</p>
      </div>
      <Button><Link href="/get-started">Get Started</Link></Button>
    </div>
  );
}
