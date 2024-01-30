import { Col, Container, Row } from "react-bootstrap";
import style from "./backedBySec.module.css"
import capitalx from "../../../assets/backedBy/CapitalX.webp";
import fc from "../../../assets/backedBy/FC.webp";
import somaCap from "../../../assets/backedBy/SomaCap.webp";
import yc from "../../../assets/backedBy/YC.svg";
import Slider from "react-slick";



function BackedBySection() {

	const sliderSettingsback = {
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				className: 'slider-items align-items-center',
				dots:true,

				breakpoint: 480, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, 
				settings: {
					dots:true,

					className: 'slider-items align-items-center',

		autoplay: true,
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1700, 
				settings: {
					dots:true,
					className: 'slider-items align-items-center',
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			
		],
	};

	return (
		<>
			
				<div className="col-10 mx-auto">
					<p className={` text-center f-27 mt-4 fw-400 my-5`}>Relied upon by the most prominent data-centric enterprises globally.</p>
				</div>

			
			<div className={`${style["backLogoDiv"]} `}>
				<Col md={11} className="d-flex justify-content-evenly align-items-center pad-0cus mx-auto my-2">
					<Slider {...sliderSettingsback}  >
						<div>
							<img src={capitalx} alt="" className={`${style["backLogo"]} mx-auto`} />
						</div>
						<div>
							<img src={fc} alt="" className={`${style["backLogo"]} mx-auto `} />
						</div>
						<div>
							<img src={somaCap} alt="" className={`${style["backLogo"]} mx-auto `} />
						</div>
						<div>
							<img src={yc} alt="" className={`${style["backLogo"]} mx-auto `} />
						</div>
					</Slider>
				</Col>
			</div>

		</>

	);
}
export default BackedBySection;