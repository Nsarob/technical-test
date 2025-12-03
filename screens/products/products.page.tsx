"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
