import logo from "./assets/logo.png";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiDoughnutChart } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            id="navbar" className="navbar navbar-expand-md navbar-light bg-light fixed-top"
            style={{ mingHeight: "10vh" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand ms-3">
                    <img
                        src={logo}
                        alt="Avatar Logo"
                        style={{
                            width: "80px",
                            height: "80px",
                            transition: "box-shadow 0.3s ease", // smooth transition
                            cursor: "pointer",
                        }}
                        className="image-fluid rounded-5"
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 15px black")} // Drop shadow on hover
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")} // Remove shadow when hover stops
                    />
                </a>
                {/* This is the button that appears when the screen shrinks */}
                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    disabled
                >
                    <input id="checkbox" type="checkbox" />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav gap-2 ms-auto">
                        <li className="nav-item  ms-auto">
                            <button
                                className="btn btn-link nav-link nav-btn bg-light text-dark d-flex align-items-center justify-content-between"
                                style={{ padding: "5px" }}
                                onClick={() => scrollToSection("slider")}
                            >
                                <IoMdHome style={{ fontSize: "23px", color: "#4D2B1E" }} className="ms-3" />
                                <span className="me-4" style={{ color: "#4D2B1E" }}>Home</span>
                            </button>
                        </li>
                        <li className="nav-item  ms-auto">
                            <button
                                className="btn btn-link nav-link nav-btn bg-light text-dark d-flex align-items-center justify-content-between"
                                style={{ padding: "5px" }}
                                onClick={() => scrollToSection("about-us")}
                            >
                                <IoInformationCircleOutline style={{ fontSize: "25px", color: "#4D2B1E" }} className="ms-3" />
                                <span className="me-4" style={{ color: "#4D2B1E" }}>About</span>
                            </button>
                        </li>
                        <li className="nav-item  ms-auto">
                            <button
                                className="btn btn-link nav-link nav-btn bg-light text-dark d-flex align-items-center justify-content-between"
                                style={{ padding: "5px" }}
                                onClick={() => scrollToSection("menu")}
                            >
                                <BiDoughnutChart style={{ fontSize: "23px", color: "#4D2B1E" }} className="ms-3" />
                                <span className="me-4" style={{ color: "#4D2B1E" }}>Menu</span>
                            </button>
                        </li>
                        <li className="nav-item  ms-auto">
                            <button
                                className="btn btn-link nav-link nav-btn bg-light text-dark d-flex align-items-center justify-content-between"
                                style={{ padding: "5px" }}
                                onClick={() => scrollToSection("contact")}
                            >
                                <IoMdCall style={{ fontSize: "20px", color: "#4D2B1E" }} className="ms-3" />
                                <span className="me-4" style={{ color: "#4D2B1E", fontSize: "15px", marginTop: "3px" }}>Contact</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
