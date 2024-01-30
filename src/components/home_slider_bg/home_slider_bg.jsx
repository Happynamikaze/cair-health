import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Styles from "./home_slider_bg.module.css"
import { BsArrowRight } from "react-icons/bs";
function HomeSliderBG({ settings, items, img }) {

    return (
        <>

            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} style={{ outline: "none" }}>
                        <img src={item} alt="" className={`${Styles["widSet"]}`} />
                    </div>
                ))}
            </Slider>

            <div className={`${Styles["req_btn_div"]}`}>
                <p className="text-center text-color-white f-25">Building AI-powered software to automate medical insurance workflows for healthcare providers and payers</p>

                <p className={`${Styles['req_btn']} text-center text-color-white f-20 fw-500 mx-auto mt-3`}>Request a demo <BsArrowRight /> </p>
            </div>

            <Container>

                <div>
                    <p className="text-center f-15 fw-500 ls-welcome my-5">Welcome to Cair Health, where innovation meets healthcare excellence. Discover how our cutting-edge platform is transforming the medical insurance claims process through the power of machine learning and LLMs. Streamlining, automating, and revolutionizing — experience the future of healthcare administration.</p>
                </div>


            </Container>
        </>
    );
}

export default HomeSliderBG;
