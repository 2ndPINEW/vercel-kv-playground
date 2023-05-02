import SayHello from "@/components/say-hello";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <main>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <SayHello name={params.name} />
      </Suspense>
    </main>
  );
}
