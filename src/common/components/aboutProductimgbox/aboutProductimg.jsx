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
					<Row key={index} className="d-flex align-items-center" >
						<Col md={6} >
							<div className="px-4">
								<p className="f-25 fw-500">{productText[index]}</p>
								<p className="f-15 fw-400 mt-3">{productPera[index]}</p>
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
