import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaBars, FaChevronDown, FaGlasses, FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaToggleOff, FaUniversalAccess, FaQuestionCircle, FaTimes } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css"
import { useState } from "react";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const [kanbasNavToggle, setKanbasNavToggle] = useState(false);
    const [courseNavToggle, setCourseNavToggle] = useState(false);

    const courseLinks = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    const getPageName = (url: String) => {
        const urlList = url.split("/");
        const pageName = urlList[urlList.length - 1];
        return pageName;
    }

    const kanbasLinks = [
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

    return (
        <>
            {kanbasNavToggle ?
                (<div>
                    <button type="button" className="btn btn-link text-decoration-none text-black position-absolute end-0 me-5 mt-5" onClick={() => setKanbasNavToggle(false)}><FaTimes /></button>
                    <ul className="text-decoration-none wd-small-kanbas-navigation position-absolute top-50 start-50 translate-middle d-flex flex-column fs-1">
                        {kanbasLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>)
                :
                (<div>
                    <div className="wd-small-header d-md-none d-flex justify-content-around align-items-center">
                        <button type="button" onClick={() => setKanbasNavToggle(true)} className="btn btn-link text-white text-decoration-none"><FaBars /></button>
                        <div className="text-center pt-2">
                            <h4>{course?.name}</h4>
                            <p>{getPageName(pathname)}</p>
                        </div>
                        <button type="button" onClick={() => setCourseNavToggle(!courseNavToggle)} className="btn btn-link text-white text-decoration-none">{courseNavToggle ? <FaTimes /> : <FaChevronDown />}</button>
                    </div>
                    {courseNavToggle ?
                        <div className="text-decoration-none wd-small-kanbas-navigation position-absolute top-50 start-50 translate-middle d-flex flex-column fs-1">
                            <button type="button" className="btn btn-link text-decoration-none text-black position-absolute top-0 end-0 d-none d-lg-block" onClick={() => setCourseNavToggle(false)}><FaTimes /></button>
                            {courseLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={`/Kanbas/Courses/${course?._id}/${link}`}>
                                        <button className="btn btn-link text-decoration-none text-danger fs-1" onClick={() => setCourseNavToggle(!courseNavToggle)}>{link}</button></Link>
                                </li>
                            ))}
                        </div>
                        :
                        (<div className="m-3">
                            <div className="d-none d-md-block">
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="d-flex">
                                        <h3 className="wd-courses-header pe-2"><HiMiniBars3 className="me-4" /> {course?.name} </h3>
                                        <h3> {">"} {getPageName(pathname)}</h3>
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
                        )
                    }
                </div>
                )}
        </>
    );
}

export default Courses