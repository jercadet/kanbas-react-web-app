import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasSmallNav from "./Courses/Home/KanbasSmallNav";
import { courses as dbCourses } from "./Database";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";


function Kanbas() {
    const [courses, setCourses] = useState(dbCourses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <KanbasNavigation />
                </div>
                <div style={{ flexGrow: 3 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar/*" element={<h1>Calendar</h1>} />
                        <Route path="Inbox/*" element={<h1>Inbox</h1>} />
                        <Route path="History/*" element={<h1>History</h1>} />
                        <Route path="Studio/*" element={<h1>Studio</h1>} />
                        <Route path="Commons/*" element={<h1>Commons</h1>} />
                        <Route path="Help/*" element={<h1>Help</h1>} />
                        <Route path="Courses/:courseId/Home/KanbasSmallNav" element={<KanbasSmallNav />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}


export default Kanbas;