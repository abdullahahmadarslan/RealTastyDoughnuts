import React from 'react';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';

const Slider = () => {
    return (
        <div id='slider' className="carousel-container" style={{ marginTop: '6rem' }}>
            <div id="carouselExample" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                        <img src={image1} className="d-block w-100 object-fit-cover img-fluid h-100" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item h-100">
                        <img src={image2} className="d-block w-100 object-fit-cover img-fluid h-100" alt="New York" />
                    </div>
                </div>

                {/* Controls for previous and next slides */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
