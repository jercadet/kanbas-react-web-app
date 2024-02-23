import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaCaretRight, FaCaretDown, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <div>
            <div className="d-flex">
                <button type="button" className="btn btn-secondary me-2">Collapse All</button>
                <button type="button" className="btn btn-secondary me-2">View Progress</button>
                <select id="select-publish-all" className="btn btn-secondary me-2">
                    <option value="publish-all">Publish All</option>
                </select>
                <button type="button" className="btn btn-danger me-2">+ Module</button>
                <button type="button" className="btn btn-secondary me-2"><FaEllipsisV /></button>
            </div>
            <hr />
            {modulesList.map((module) => (
                <ul className="list-group">
                    <li
                        className="list-group-item list-group-item-secondary mb-4"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV />
                            {selectedModule._id === module._id ? <FaCaretDown className="mx-2" /> : <FaCaretRight className="mx-2" />}
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown />
                                <FaPlus className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group pt-2">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default ModuleList;