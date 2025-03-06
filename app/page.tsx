import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import FilterSection from "@/components/home/filterSection";
import PropertyListing from "@/components/home/propertyListing";

export default function Home() {
  return (
    <>
      <div className="h-full w-full px-8 md:px-[4em] lg:px-[8em] xl:px-[8.75em]">
        <Header />
        <FilterSection />
        <PropertyListing />
      </div>
      <Footer />
    </>
  );
}
