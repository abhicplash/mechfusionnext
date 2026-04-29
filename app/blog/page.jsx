// app/blog/page.jsx

import Image from "next/image";
import Link from "next/link";

import BlogBanner from "@/components/BlogBanner";
import HomeContact from "@/components/HomeContact";

import styles from "@/styles/Blog.module.css";

import blog1 from "@/public/images/18.jpg";
import blog2 from "@/public/images/11.jpg";
import blog3 from "@/public/images/02.jpg";
import blog4 from "@/public/images/19.jpg";
import blog5 from "@/public/images/10.jpg";

import { HiArrowCircleRight } from "react-icons/hi";

export const metadata = {
  title: "Engineering Blogs & Manufacturing Insights | Mechfusion",
  description:
    "Explore Mechfusion’s engineering blog for insights on CNC programming, mechanical design trends, CAM services, jigs, fixtures, and smart manufacturing updates.",
  keywords: [
    "Design for Manufacturing",
    "CNC Programming",
    "Mechanical Design",
  ],
  alternates: {
    canonical: "/blog",
  },
};

const blogs = [
  {
    slug: "/blog/jigs-fixture-design-services-canada",
    image: blog1,
    title:
      "How Jigs and Fixture Design Services Canada Help CNC Manufacturers Improve Productivity and Accuracy",
  },
  {
    slug: "/blog/jigs-fixture-design-services-uk-automotive-aerospace",
    image: blog2,
    title:
      "How Jigs and Fixture Design Services UK Improve Automotive and Aerospace Manufacturing",
  },
  {
    slug: "/blog/injection-mold-design-services-cost-effective-manufacturing",
    image: blog3,
    title: "Injection Mold Design Services for Cost-Effective Manufacturing",
  },
  {
    slug: "/blog/affordable-mold-design-services-in-uk",
    image: blog4,
    title: "Mold Design Services in the UK for Startups and SMEs",
  },
  {
    slug: "/blog/cnc-programming-services-in-canada",
    image: blog5,
    title:
      " CNC Programming Services in Canada for High-Precision Machining Projects",
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogBanner />

      <section className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <Link href={blog.slug} key={index} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={blog.image}
                alt={blog.title}
                className={styles.blogImg}
              />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardPara}>
                {blog.title}
                {/* <HiArrowCircleRight className={styles.arrowicon} /> */}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <HomeContact />
    </>
  );
}
