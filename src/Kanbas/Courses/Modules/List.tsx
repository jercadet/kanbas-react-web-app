import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const [expanedModule, setExpandedModule] = useState<any>(moduleList[0]);

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
            <div className="d-flex justify-content-between">
                <div className="flex-fill pe-5">
                    <input className="form-control mb-1" value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <textarea className="form-control mb-1" value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                    />
                </div>
                <div>
                    <button className="btn btn-success mb-1 me-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button className="btn btn-primary mb-1" onClick={() => dispatch(updateModule(module))}>Update</button>
                </div>
            </div>
            <hr />
            <ul className="list-group">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item list-group-item-secondary"
                            onClick={() => setExpandedModule(module)}>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        {expanedModule._id === module._id ? <FaCaretDown className="mx-2" /> : <FaCaretRight className="mx-2" />}
                                        <div>
                                            {module.name}
                                            <p>
                                                {module.description}
                                                <br />
                                                {module._id}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-success me-2"
                                            onClick={() => dispatch(setModule(module))}>
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => dispatch(deleteModule(module._id))}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {expanedModule._id === module._id && (
                                <ul className="list-group pt-2">
                                    {module.lessons?.map((lesson: any, index: number) => (
                                        <li key={index} className="list-group-item">
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
                    ))}
            </ul>
        </div>
    );
}

export default ModuleList;