import React from 'react'
import aboutus from './assets/aboutus.gif'

const About = () => {
    return (
        <div id='about-us' className='about-us-main vh-100 container-fluid d-flex align-items-center justify-content-center flex-lg-nowrap flex-wrap'>
            {/* Use col-12 for small devices and col-lg-6 for large devices */}
            <div className="about-us-img col-12 col-lg-5 mx-lg-auto mt-3" >
                <img
                    className='img-fluid rounded-5'
                    src={aboutus}
                    alt="aboutus img"
                    style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)' }} // This adds the shadow
                />
            </div>

            <div className="about-us-text col-12 col-lg-5 mx-lg-auto mt-3" style={{ marginBottom: "5rem" }}>
                <h1 className='about-us-heading '>ABOUT US</h1>
                <p className='mt-lg-5'>At Pinocchio Cafe, we believe in creating a cozy and welcoming space where coffee lovers can unwind and enjoy a perfect cup of coffee. Our menu features a carefully curated selection of freshly brewed coffee, artisanal drinks, and delightful pastries that pair perfectly with every sip.</p>
                <p className='mt-lg-4'>We pride ourselves on using high-quality ingredients and sustainable practices to ensure that every cup we serve reflects our commitment to excellence. Our baristas are passionate about crafting unique flavors and experiences, making sure that each visit to Pinocchio Cafe is special.</p>
            </div>
        </div>
    )
}

export default About
