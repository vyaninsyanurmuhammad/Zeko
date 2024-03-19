import { Metadata } from "next";
import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("@/components/home/home-hero"), {
  ssr: false,
});

const HomeOverview = dynamic(() => import("@/components/home/home-overview"), {
  ssr: false,
});

const HomeServices = dynamic(() => import("@/components/home/home-services"), {
  ssr: false,
});

const HomeTestimoni = dynamic(
  () => import("@/components/home/home-testimoni"),
  {
    ssr: false,
  }
);

const HomeCompanyTagline = dynamic(
  () => import("@/components/home/home-company-tagline"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Zeko! - Home",
  description:
    "Welcome to Zeko! We are a dedicated team committed to providing creative and innovative solutions for your web design and development needs. Explore our services encompassing responsive web design, app development, and more. Join us and bring your digital vision to life with Zeko!",
};

export default function Home() {
  return (
    <>
      <div className="h-full w-full overflow-y-auto scroll-smooth">
        <HomeHero />
        <HomeOverview />
        <HomeServices />
        <HomeTestimoni />
        <HomeCompanyTagline />
      </div>
    </>
  );
}
