import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        message: '',
        to_name: 'Pinnochio Cafe', // Your name to receive the email
        user_email: ''
    });
    const [isSent, setIsSent] = useState(false); // To show success toast after sending email

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            from_name: formData.from_name,
            to_name: 'Pinnochio Cafe', // Your name
            message: formData.message,
            user_email: formData.user_email // If required in your template
        };

        emailjs
            .send(
                'service_72kjaga', // Service ID
                'template_jpe1dzi', // Template ID
                emailParams, // Email parameters
                'ojGbmmBcBfmpFWTbs' // Public Key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setIsSent(true); // Show the toast
                    setTimeout(() => setIsSent(false), 5000); // Hide the toast after 5 seconds
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
        // Optionally reset the form
        setFormData({
            from_name: '',
            message: '',
            to_name: 'Pinnochio Cafe',
            user_email: ''
        });
    };

    return (
        <>
            <br />
            <div id='contact' className='container-fluid d-flex justify-content-center align-items-center h-auto'>
                <div className="container">
                    <h2 className='contact-us-heading text-center'>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="from_name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                placeholder='Enter Your Name Here...'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="user_email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                placeholder='Enter Your Email Here...'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                placeholder='Enter Your Message Here...'
                            ></textarea>
                        </div>
                        <button
                            className="btn btn-link nav-link nav-btn bg-light text-dark d-flex align-items-center justify-content-between"
                            style={{ padding: "5px", zIndex: "1" }}
                            type="submit"
                        >
                            <IoIosSend style={{ fontSize: "23px", color: "#4D2B1E" }} className="ms-3" />
                            <span className="me-4" style={{ color: "#4D2B1E" }}>Send</span>
                        </button>
                    </form>

                    {/* Toast Notification */}
                    <div className={`toast align-items-center text-white bg-success border-0 ${isSent ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: "2" }}>
                        <div className="d-flex">
                            <div className="toast-body">
                                Your message has been sent successfully!
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setIsSent(false)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
