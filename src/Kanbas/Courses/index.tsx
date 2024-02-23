import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaBars, FaChevronDown, FaGlasses, FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaToggleOff, FaUniversalAccess, FaQuestionCircle, FaTimes } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css"
import { useState } from "react";
import KanbasSmallNav from "./Home/KanbasSmallNav";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const [kanbasNavToggle, setKanbasNavToggle] = useState(false);

    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaEnvelope className="fs-2" /> },
        { label: "History", icon: <FaClock className="fs-2" /> },
        { label: "Studio", icon: <FaToggleOff className="fs-2" /> },
        { label: "Commons", icon: <FaUniversalAccess className="fs-2" /> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> }
    ];

    // Screen Sizes
    // xs = 0 (0 px)
    // sm = 1 (576 px)
    // md = 2 (768 px)
    // lg = 3 (992 px)
    // xl = 4 (1200 px)
    // xxl = 5 (1400 px)
    // const [screenSize, setScreenSize] = useState(window.width);
    return (
        <>
            {kanbasNavToggle ?
                (<div>
                    <button className="btn btn-link text-decoration-none text-black position-absolute end-0 me-5 mt-5" onClick={() => setKanbasNavToggle(false)}><FaTimes /></button>
                    <ul className="text-decoration-none wd-small-kanbas-navigation position-absolute top-50 start-50 translate-middle d-flex flex-column fs-1 d-md-none">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>)
                :
                <div>
                    <div className="wd-small-header d-md-none d-flex justify-content-around align-items-center">
                        <button onClick={() => setKanbasNavToggle(true)} className="btn btn-link text-white text-decoration-none"><FaBars /></button>
                        <div className="text-center pt-2">
                            <h4>CS4550.78421.879543</h4>
                            <p>Modules</p>
                        </div>
                        <button type="button" className="btn btn-link"><FaChevronDown /></button>
                    </div>
                    <div className="m-3">
                        <div className="d-none d-md-block">
                            <div className="d-flex justify-content-between mb-3">
                                <div className="d-flex">
                                    <h3 className="wd-courses-header pe-2"><HiMiniBars3 className="me-4" /> {course?.name} </h3>
                                    <h3> {">"} Modules</h3>
                                </div>
                                <button type="button" className="btn btn-secondary"><FaGlasses /> Student View</button>
                            </div>
                            <hr />
                        </div>
                        <div className="d-flex">
                            <div className="d-none d-md-block">
                                <CourseNavigation />
                            </div>
                            <div
                                className="mt-2 flex-grow-1"
                                style={{ left: "320px", top: "50px" }} >
                                <Routes>
                                    <Route path="/" element={<Navigate to="Home" />} />
                                    <Route path="Home" element={<Home />} />
                                    <Route path="Modules" element={<Modules />} />
                                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                                    <Route path="Assignments" element={<Assignments />} />
                                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                                    <Route path="Grades" element={<h1>Grades</h1>} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Courses