import { Metadata } from "next";
import dynamic from "next/dynamic";

const HomeMain = dynamic(() => import("@/components/home/home-main"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Zeko! - Home",
  description:
    "Welcome to Zeko! We are a dedicated team committed to providing creative and innovative solutions for your web design and development needs. Explore our services encompassing responsive web design, app development, and more. Join us and bring your digital vision to life with Zeko!",
};

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}
