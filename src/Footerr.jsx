import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#e90e8b',
            color: 'white',
            padding: '40px 0',
            height: '100px',  /* Adjust height as necessary */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="container text-center">
                <p style={{ fontSize: '0.9rem', marginTop: "12px" }}>
                    &copy; 2024 Real Tasty Doughnuts. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
