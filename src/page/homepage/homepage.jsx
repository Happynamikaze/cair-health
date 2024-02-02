import NavBar from "../../common/components/navbar/navbar"
import HomeSliderBG from "../../components/home_slider_bg/home_slider_bg";
import CeoSection from "../../common/components/ceoSection/ceoSection";
import earthImg from "../../assets/slider_img/earth.jpg";
import chartImg from "../../assets/slider_img/chart.jpg";
import dataImg from "../../assets/slider_img/analysis-1841158_1920.jpg";
import waveImg from "../../assets/slider_img/frequency-wave-.jpg";
import BackedBySection from "../../common/components/backedBySection/backedBySection";
import AboutProduct from "../../common/components/aboutProduct/aboutProduct";
import FormContact from "../../common/components/form/form";
import Footer from "../../common/components/footer/footer";



const sliderSettings = {
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 5000,
};


const sliderItems = [earthImg, chartImg, dataImg, waveImg];

function homePage() {
	return (
		<>
			<NavBar />
			{/* <HomeSliderBG/> */}
			
			<HomeSliderBG settings={sliderSettings} items={sliderItems} />
			<CeoSection />
			 <BackedBySection />
			<AboutProduct/>
			<FormContact/>
			<Footer/>
		</>
	);
}
export default homePage;