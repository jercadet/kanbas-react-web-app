import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";


function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="d-flex">
                <input type="text" name="search" id="search-assignment" className="flex-fill me-2" placeholder="Assignment Name" />
                <div className="d-inline-flex">
                    <button type="button" className="btn btn-secondary me-2">+ Group</button>
                    <button type="button" className="btn btn-danger me-2">+ Assignment</button>
                    <button type="button" className="btn btn-secondary me-2"><FaEllipsisV /></button>
                </div>
            </div>
            <hr />
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary mb-4">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group pt-2">
                        {assignmentList.map((assignment, index) => (
                            <li key={index} className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Assignments;