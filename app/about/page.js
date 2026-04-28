import AboutBanner from "@/components/AboutBanner";
import AboutBanner1 from "@/components/AboutBanner1";
import AboutIntro from "@/components/AboutIntro";
import HomeContact from "@/components/HomeContact";


export const metadata = {
  title: "About Mechfusion | Engineering Design & Consulting Services",
  description:
    "Mechfusion transforms ideas into accurate, manufacturable designs through precision engineering, innovative solutions, and professional consulting services.",
  keywords: [
    "Reverse Engineering Design",
    "Estimation and Costing",
    "Engineering Design Services",
    "Mechanical Design",
    "Consulting Services",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Reverse Engineering Design & Cost Estimation Experts | Mechfusion",
    description:
      "Mechfusion transforms ideas into accurate, manufacturable designs through precision engineering and consulting.",
    url: "/about",
    siteName: "Mechfusion",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutBanner1 />
      <AboutBanner />
      <AboutIntro />
      <HomeContact />
    </>
  );
};

export default AboutPage;
