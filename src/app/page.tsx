import Brands from "@/components/Brands";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Styles from "@/components/Styles";
import TopSelling from "@/components/TopSelling";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Brands/>
    <NewArrivals/>
    <TopSelling/>
    <Styles/>
    <HappyCustomers/>

    </>
  );
}
