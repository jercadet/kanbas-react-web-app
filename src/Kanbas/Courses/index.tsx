import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaBars, FaChevronDown, FaGlasses } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css"

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <>
            <div className="wd-small-header d-md-none d-flex justify-content-around align-items-center">
                <Link to={`/Kanbas/Courses/${courseId}/Home/KanbasSmallNav`} className="btn btn-link text-white text-decoration-none"><FaBars /></Link>
                <div className="text-center">
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
        </>
    );
}

export default Courses