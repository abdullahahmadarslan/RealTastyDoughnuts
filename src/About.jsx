import React from "react";
import aboutus from "./assets/aboutus.gif";

const About = () => {
    return (
        <div
            id="about-us"
            className="about-us-main h-aut0 container-fluid d-flex align-items-center justify-content-center flex-lg-nowrap flex-wrap"
        >
            {/* Use col-12 for small devices and col-lg-6 for large devices */}
            <div className="about-us-img col-12 col-lg-4 mx-lg-auto mt-3 mt-lg-5 h-lg-75">
                <img
                    className="img-fluid rounded-5"
                    src={aboutus}
                    alt="aboutus img"
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)" }} // This adds the shadow
                />
            </div>
            <div
                className="about-us-text col-12 col-lg-6 mx-lg-auto mt-3 mt-lg-0"
                style={{ marginBottom: "5rem" }}
            >
                <h1 className="about-us-heading ">ABOUT US</h1>
                <p className='mt-lg-5'>At Real Tasty Doughnuts, we believe in creating a cozy and inviting space where doughnut enthusiasts can indulge in delicious treats. Our menu showcases a curated selection of freshly made doughnuts, artisanal flavors, and delightful beverages that complement every bite.</p>
                <p className='mt-lg-4'>We take pride in using premium ingredients and sustainable practices to ensure that every doughnut reflects our dedication to quality. Our bakers are passionate about crafting unique flavors and experiences, making sure that every visit to Real Tasty Doughnuts is a sweet and memorable one.</p>
                <p className='mt-lg-4'>At Real Tasty Doughnuts, we are committed to excellence by using only the finest ingredients and embracing eco-friendly practices. Our skilled bakers are dedicated to creating distinctive and delicious doughnuts, ensuring that each visit to our shop is a delightful and unforgettable treat.</p>

            </div>
        </div>
    );
};

export default About;
