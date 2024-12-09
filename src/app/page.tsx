import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Editors from "./components/editorPick";
import ProductCard from "./components/productCard";
import VitaClasic from "./components/vitaClasic";
import PartOfNatural from "./components/partOfNatural";
import FeaturedPost from "./components/featuredPosts";
import FooterFirst from "./components/footerFirst";
import Footer  from "./components/footer";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Editors/>
     <ProductCard/>
     <VitaClasic/>
     <PartOfNatural/>
     <FeaturedPost/>
     <FooterFirst/>
     <Footer/>
    </div>
    

       );
}
