import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PeralalLayout({
  children,
  marketingSlot,
  selsSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  selsSlot: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-8 m-4">
        <Button asChild>
          <Link href="/development">Development</Link>
        </Button>
        <Button asChild>
          <Link href="/testing">Testing</Link>
        </Button>
        <Button asChild>
          <Link href="/marketing">Marketing</Link>
        </Button>
        <Button asChild>
          <Link href="/marketing/seeting">Seeting</Link>
        </Button>
        <Button asChild>
          <Link href="/seels">Seels</Link>
        </Button>
      </div>
      <div className="flex gap-2 mb-2">
        {marketingSlot}
        {selsSlot}
      </div>

      {children}
    </div>
  );
}
