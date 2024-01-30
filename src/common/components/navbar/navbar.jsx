import { Col, Container, Navbar, Row } from "react-bootstrap";
import Styles from "./navbar.module.css"
import pcLogo from "../../../img/logo/logo_cair.png";
import { BsArrowRight } from "react-icons/bs";
function navBar() {
	return (
		<div className={` ${Styles['header']} ${Styles['glass']}`}>
			<Container >
				<Row className="mx-auto align-items-center py-1" >
					<Col md={6} xs={12} className={`${Styles['right_side ']} d-md-block d-flex justify-content-center`}>
						<img src={pcLogo} alt="" width={150} />
					</Col>

					<Col md={6} className=" d-md-flex d-none justify-content-end ">

					<a href="#containerFormID">

						<p className={`${Styles['reqDemoBtn']} d-inline-block`}>Request a demo <BsArrowRight /> </p>
					</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default navBar;          