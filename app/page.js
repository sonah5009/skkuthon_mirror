// "use client";
import Head from "next/head";
import Link from "next/link";
import Body3dModel from "./components/Body3dModel";
export default function Home() {
  return (
    <main>
      {/* <Link href="/pages/body">body</Link> */}
      {/* <ProductCard /> */}
      <Body3dModel />
    </main>
  );
}
