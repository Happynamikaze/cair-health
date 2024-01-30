import { Col, Container, Row } from "react-bootstrap";
import styles from "./form.module.css";

function FormContact() {
	return (
		<Container className={`${styles["containerForm"]} mt-5`}>
			<div className={`${styles["text"]}`}>Request a demo </div>
			<form action="#" method="get">
				<div className={`${styles["form-row"]}`}>
					<div className={`${styles["input-data"]}`}>
						<input type="text" required />
						<div className={`${styles["underline"]}`}></div>
						<label htmlFor="">Name</label>
					</div>
					<div className={`${styles["input-data"]}`}>
						<input type="text" required />
						<div className={`${styles["underline"]}`}></div>
						<label htmlFor="">Email </label>
					</div>
					
				</div>
				<div className={`${styles["form-row"]}`}>
				<div className={`${styles["input-data"]}`}>
						<input type="text" required />
						<div className={`${styles["underline"]}`}></div>
						<label htmlFor="">Role</label>
					</div>
					<div className={`${styles["input-data"]}`}>
						<input type="text" required  />
						<div className={`${styles["underline"]}`}></div>
						<label htmlFor="">Company</label>
					</div>
				</div>
				<div className={`${styles["form-row"]}`}>
					<div className={`${styles["input-data"]} ${styles["textarea"]}`}>
						<textarea rows="8" cols="80" required></textarea>
						<br />
						<div className={`${styles["underline"]}`}></div>
						<label htmlFor="">Write your message</label>
					</div>
				</div>
				<div className={`${styles["form-row"]} ${styles["submit-btn"]}`} >
					<div className={`${styles["input-data"]}`}>
						<div className="inner"></div>
						<input type="submit" value="submit" />
					</div>
				</div>
			</form>
		</Container>
	);
}

export default FormContact;
