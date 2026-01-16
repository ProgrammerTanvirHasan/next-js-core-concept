import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Button asChild>
          <Link href="/dashboard/analitics/weekly">Weekly</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/analitics/monthly">Monthly</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/analitics/daily">Daily</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
