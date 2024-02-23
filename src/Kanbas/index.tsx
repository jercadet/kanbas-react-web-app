import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="d-flex">
            <div className="d-none d-md-block">
                <KanbasNavigation />
            </div>
            <div className="pe-3"
                style={{ flexGrow: 3 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar/*" element={<h1>Calendar</h1>} />
                    <Route path="Inbox/*" element={<h1>Inbox</h1>} />
                    <Route path="History/*" element={<h1>History</h1>} />
                    <Route path="Studio/*" element={<h1>Studio</h1>} />
                    <Route path="Commons/*" element={<h1>Commons</h1>} />
                    <Route path="Help/*" element={<h1>Help</h1>} />
                </Routes>
            </div>
        </div>
    );
}


export default Kanbas;