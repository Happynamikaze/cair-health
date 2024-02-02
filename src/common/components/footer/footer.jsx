import { Container, Row } from "react-bootstrap";
import SiteLogo from "../../../img/logo/logo_cair.png";
import Styles from "./footer.module.css";
function Footer() {
	return (
		<div className={`${Styles["FooterBG"]} mt-5`}>
			<Container  >
				<div className="mt-4 pt-5  d-flex flex-md-row flex-column gap-md-0 gap-5 align-items-center justify-content-between">

					<div>
						<img src={SiteLogo} className={`${Styles["FooterLogo"]}`} width={200} />
					</div>
					<div>
						<ul>
							<li>Site map</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Site map</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
							<li>Lorem</li>
						</ul>
					</div>
				</div>


			</Container>
		</div>
	);
}
export default Footer;