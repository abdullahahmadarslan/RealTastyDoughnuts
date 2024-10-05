import React, { useEffect, useRef, useState } from "react";

const Menu = () => {
    const [visible, setVisible] = useState(false);  // Track if the Menu is visible
    const menuRef = useRef(null);  // Reference to the Menu section

    // Sample Data
    const donuts = [
        {
            image: "/c1.png",
            title: "Rose Vanilla",
            description: "Delight in the fragrant blend of sweet vanilla and delicate rose petals. A quintessentially British flavour pairing.",
            price: "2.50",
        },
        {
            image: "/c2.png",
            title: "Chocolate Crunch",
            description: "Indulge in rich chocolate with a satisfyingly crisp crunch. Perfect with your afternoon tea or morning coffee.",
            price: "2.50",
        },
        {
            image: "/c3.png",
            title: "Strawberry Sprinkles",
            description: "Bursting with the taste of fresh British strawberries and vibrant sprinkles, this donut is a true summer treat.",
            price: "2.50",
        },
        {
            image: "/c4.png",
            title: "Caramel Glaze",
            description: "A smooth caramel glaze coats this donut, providing a sweet and sticky finish. Ideal for an indulgent snack.",
            price: "2.50",
        },
        {
            image: "/c5.png",
            title: "Cookies & Cream",
            description: "Creamy icing with chunks of chocolate biscuits, giving a delightful crunch. A firm favourite among sweet tooths.",
            price: "2.50",
        },
        {
            image: "/c6.png",
            title: "Lemon Frosting",
            description: "Zesty lemon frosting with a tangy finish, offering a refreshing twist on a classic British flavour favourite.",
            price: "2.50",
        },
    ];

    // Intersection Observer API logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();  // Unobserve after it's in view (to run animation only once)
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the Menu section is in the viewport
        );

        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => {
            if (menuRef.current) {
                observer.unobserve(menuRef.current);
            }
        };
    }, []);

    return (
        <div id="menu" className="h-auto container py-5" ref={menuRef}>
            <h1 className="menu-heading text-center">Menu</h1>
            <div className="row">
                {donuts.map((donut, index) => (
                    <div
                        className={`col-md-4 col-sm-12 mb-4 fade-in ${visible ? "fade-in-visible" : ""}`}
                        key={index}
                    >
                        <div className="card h-100 text-center border-0 ">
                            <img
                                src={donut.image}
                                className="card-img-top img-fluid rounded-4"
                                alt={donut.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                    {donut.title}
                                </h5>
                                <p className="card-text">{donut.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
