import React from 'react'
import './index.css'
import { FaBell, FaBullhorn, FaChartBar, FaFileDownload, FaLifeRing, FaUniversalAccess } from 'react-icons/fa';

function ModuleStatus() {
    return (
        <div className="wd-course-status mb-3">
            <div className="text-start w-100 pb-3">
                <button type="button" className="btn btn-secondary mb-1"><FaFileDownload /> Import Existing Content</button>
                <button type="button" className="btn btn-secondary mb-1"><FaUniversalAccess /> Import from Commons</button>
                <button type="button" className="btn btn-secondary mb-1"><FaLifeRing /> Choose Home Page</button>
                <button type="button" className="btn btn-secondary mb-1"><FaChartBar /> View Course Stream</button>
                <button type="button" className="btn btn-secondary mb-1"><FaBullhorn /> New Announcement</button>
                <button type="button" className="btn btn-secondary mb-1"><FaChartBar /> New Analytics</button>
                <button type="button" className="btn btn-secondary mb-1"><FaBell /> View Course Notification</button>
            </div>
            <div>
                <h4>To Do</h4>
                <hr />
                <div className='wd-course-status-to-do'>
                    <button type="button" className="btn btn-link">Grade A1 - ENV + HTML
                        <br /><span>100 points - Sep 18 at 11:59pm</span></button>
                    <button type="button" className="btn btn-link">Grade A2 - CSS + BOOTSTRAP
                        <br /><span>100 points - Oct 2 at 11:59pm</span></button>
                    <button type="button" className="btn btn-link">Grade A3 - Rocket Fuel
                        <br /><span>100 points - Oct 26 at 11:59pm</span></button>
                </div>
            </div>
        </div>
    )
}

export default ModuleStatus;
