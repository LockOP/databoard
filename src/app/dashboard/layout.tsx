"use client";

import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <div className="w-full p-4">Dashboard Layout {children} </div>;
}
