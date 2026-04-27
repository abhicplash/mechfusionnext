import HomeBanner from "@/components/HomeBanner";
import HomeServices from "@/components/HomeServices";
import HomeContact from "@/components/HomeContact";
import HomeAbout from "@/components/HomeAbout";
import HomeAccordion from "@/components/HomeAccordion";
import Whychoose from "@/components/Whychoose";
import Countries from "@/components/Countries";
import Industries from "@/components/Industries";

/* ✅ SEO (Next.js way) */
export const metadata = {
  title: "Mechanical Design Service for Products | Mechfusion",
  description:
    "Mechfusion offers expert product design backed by mechanical engineering to turn your ideas into accurate, manufacturable solutions.",
  keywords: ["Product Design", "Mechanical Design Service"],
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <Whychoose />
      <Countries />
      <Industries />
      <HomeAccordion />
      <HomeContact />
    </>
  );
}
