import { Col, Row } from "react-bootstrap";
import styles from "./aboutProductimg.module.css"
import Slider from "react-slick";
// import Styles from "./home_slider_bg.module.css"
function AboutProductimg({ productImg, productText, productPera }) {

	const sliderSettings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
	};
	return (
		<>
			<Slider {...sliderSettings}>
				{productImg.map((imgSrc, index) => (
					<Row key={index} className="d-flex mt-4 mb-md-0 mb-5 flex-md-row flex-column-reverse  align-items-center" >
						<Col md={6} sm={11} >
							<div className="px-md-4 px-1">
								<p className="f-25 text-md-center text-center fw-500">{productText[index]}</p>
								<p className="f-15 text-md-center text-center fw-400 mt-3">{productPera[index]}</p>
							</div>
						</Col>
						<Col md={6}>
							<div className={`${styles["productImgDiv"]}`}>
								<img src={imgSrc} alt="" className={`${styles["productDivimg"]}`} />
							</div>
						</Col>
					</Row>
				))}
			</Slider>
		</>
	);
}

export default AboutProductimg;
