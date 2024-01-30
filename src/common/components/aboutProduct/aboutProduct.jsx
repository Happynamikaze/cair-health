import { Col, Container, Row } from "react-bootstrap";
import AboutProductimg from "../aboutProductimgbox/aboutProductimg";
import firstImg from "../../../assets/product_img/1st.jpg";
import secondImg from "../../../assets/product_img/2nd.jpg";
import thirdImg from "../../../assets/product_img/3rd.png";
import forthImg from "../../../assets/product_img/4th.png";
import fifthImg from "../../../assets/product_img/5th.png";

function AboutProduct() {
	//   const producttextlocal = [
	//     "Explore the Cair Health platform, a sophisticated solution designed to automate and optimize the medical insurance claims journey.","hie sadddddddddddddddddddddddddd"
	//   ];
	//   const ProductImgArry = [firstImg];
	const productImages = [firstImg, secondImg, thirdImg, forthImg, fifthImg];
	const productTexts = ['Predictive Insights', 'Automated Submission', 'Technology Behind the Platform', 'User-Friendly Interface', 'Real-world Impact:'];
	const productPeras = [
		'Uncover the power of predictive insights that our platform provides to healthcare providers. Gain a deeper understanding of claims data and enhance decision-making processes.',
		 'Experience the efficiency of our automated submission process. Streamline the traditionally complex task of submitting medical insurance claims, saving time and resources for healthcare professionals.',
		  'Delve into the cutting-edge technology powering Cair Health platform. Discover how machine learning and LLMs work in tandem to bring precision and automation to the forefront of medical insurance claims processing. ',
		   'Navigate our user-friendly interface that ensures a seamless experience for healthcare providers. Intuitive design meets powerful functionality, making the platform accessible and efficient.',
		    'Read through real-world case studies and testimonials showcasing the impact of Cair Health platform. See how healthcare providers have transformed their operations and improved patient care through our innovative solutions.'];
	return (
		<>
			<div className="col-10 mx-auto ">
				
					<div  className="text-center mt-5">
						<p className="f-25 fw-500">
							Explore the Cair Health platform, a sophisticated solution designed to automate and optimize the medical insurance claims journey.
						</p>
					</div>
			

				<AboutProductimg productImg={productImages} productText={productTexts} productPera={productPeras} />


			</div>
		</>
	);
}

export default AboutProduct;
