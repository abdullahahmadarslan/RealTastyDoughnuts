import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#4D2B1E',
            color: 'white',
            padding: '40px 0',
            height: '100px',  /* Adjust height as necessary */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="container text-center">
                <p style={{ fontSize: '1.1rem', marginTop: "12px" }}>
                    &copy; 2024 Pinnochio Cafe. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
