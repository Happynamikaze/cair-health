import { Col, Container, Row } from "react-bootstrap";
import styles from "./ceoSection.module.css";
import ceo1st from "../../../assets/ceo_img/1st.jpg"
import ceo2nd from "../../../assets/ceo_img/2nd.jpg"
import Slider from "react-slick";
// import Styles from "./home_slider_bg.module.css"

function CeoSection() {
	const sliderSettingsceo = {
		infinite: true,
		speed: 900,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		
			<div className=" col-md-0 col-10 mx-auto my-5">
				
				<div>
					<p className="fw-600 f-27 mb-1 text-center mt-5">About Us:</p>
					<p className="text-center f-15 fw-500 ls-welcome mb-5"> <br /> Cair Health is an early-stage healthcare technology startup with a mission to revolutionize the medical insurance claims process. Founded by healthcare and technology experts from UC Berkeley, we are backed by industry-leading investors like Y Combinator, Foundation Capital, Soma Capital, and CapitalX.</p>
					<p className="f-20 fw-600 mt-5">Meet Our CEOs:</p>
				</div>
				
				<Slider {...sliderSettingsceo}>
					<Col md={11} className="d-flex flex-md-row flex-column justify-content-evenly align-items-center mx-auto mt-5 px-md-4 px-1 ">

						<Col md={3}>
							<div className={`${styles["ceoimg"]} d-flex justify-content-center `}>
								<img src={ceo2nd} alt="" />
							</div>
						</Col>
						<Col md={9} sm={11}>
							<p className="fw-400 text-md-start text-center  mt-md-0 mt-4 ">Passionate about building innovative solutions that improve healthcare. Studied Biochemistry and Public Health at UC Berkeley, spending most of my time understanding the healthcare ecosystem and working on projects to solve pressing healthcare challenges through the public and private sectors.

							</p>
							<p className="f-25 fw-500 text-md-start text-center   mt-3">Shehbaz Virk</p>
							<p className="f-15 fw-400 text-md-start text-center ">CEO, Cair Health</p>
						</Col>

					</Col>
					<Col md={11} className="d-flex flex-md-row flex-column-reverse justify-content-evenly align-items-center mx-auto mt-5 px-md-4 px-1 ">
						<Col md={9} sm={11}>
							<p className="fw-400 text-md-start text-center mt-md-0 mt-4 ">I'm a Berkeley senior taking a break from my degrees in Comp Sci & Business to launch my own company currently in Y Combinator's S23 batch.
							</p>
							<p className="f-25 fw-500 text-md-start text-center   mt-3">Ishan Balakrishnan</p>
							<p className="f-15 fw-400 text-md-start text-center ">CEO, Cair Health</p>
						</Col>
						<Col md={3}>
							<div className={`${styles["ceoimg"]} d-flex justify-content-center `}>
								<img src={ceo1st} alt="" />
							</div>
						</Col>
					</Col>
				</Slider>
			</div>

		
	);
}

export default CeoSection;