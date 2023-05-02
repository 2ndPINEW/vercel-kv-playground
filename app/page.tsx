// import Echo from "@/components/echo";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Suspense>{/* <Echo input="" /> */}</Suspense>
    </main>
  );
}
