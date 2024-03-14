import React from "react";
import { Link } from "react-router-dom";
import KanbasNavigation from "../Navigation";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }:
        {
            courses: {
                _id: string;
                name: string;
                number: string;
                startDate: string;
                endDate: string;
                image: string;
            }[],
            course: {
                _id: string;
                name: string;
                number: string;
                startDate: string;
                endDate: string;
                image: string;
            },
            setCourse: React.Dispatch<React.SetStateAction<{
                _id: string;
                name: string;
                number: string;
                startDate: string;
                endDate: string;
                image: string;
            }>>,
            addNewCourse: () => void,
            deleteCourse: (courseId: any) => void,
            updateCourse: () => void
        }

) {

    return (
        <div className="d-flex">
            <div className="d-md-none">
                <KanbasNavigation />
            </div>
            <div className="p-4 pe-3 flex-fill">
                <h1>Dashboard</h1> <hr />
                <h5>Course</h5>
                <input value={course.name} className="form-control mb-1" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control mb-1" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control mb-1" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control mb-1" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <div className="mb-3">
                    <button className="btn btn-primary me-2" onClick={addNewCourse} >
                        Add
                    </button>
                    <button onClick={updateCourse} className="btn btn-success me-2" >
                        Update
                    </button>
                </div>

                <h2>Published Courses (12)</h2> <hr />
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
                            <div key={course._id} className="col" style={{ width: 300 }}>
                                <div className="card">
                                    <img src={`/images/${course.image}`} className="card-img-top"
                                        style={{ height: 150 }} alt="" />
                                    <div className="card-body">
                                        <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                            {course.name} </Link>
                                        <p className="card-text">{course.number}</p>
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                                Go </Link>
                                            <button className="btn btn-primary" onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                                Edit
                                            </button>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                                className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;