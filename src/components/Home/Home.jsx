import ToggleMode from "../../ToggleMode";
import BrandBox from "../BrandBox/BrandBox";
import ClientSection from "../client/ClientSection";
import ContactUs from "../Contact/ContactUs";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div>
        <Hero></Hero>
        <ToggleMode></ToggleMode>
        <BrandBox></BrandBox>
        <ClientSection></ClientSection>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </div>
    );
};

export default Home;