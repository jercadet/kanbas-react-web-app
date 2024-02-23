import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaToggleOff, FaUniversalAccess, FaQuestionCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

function KanbasSmallNav() {
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
    return (
        <>
        <button className="btn btn-link text-decoration-none text-black position-absolute end-0 me-5 mt-5"><FaTimes /></button>
            <ul className="text-decoration-none wd-small-kanbas-navigation position-absolute top-50 start-50 translate-middle d-flex flex-column fs-1 d-md-none">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default KanbasSmallNav;