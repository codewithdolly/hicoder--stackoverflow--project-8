import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import "./JobRoles.scss";
import ReactJS from "./ReactJS"
import FrontendJob from "./FrontendJob"
import JavaScript from "./JavaScript"

const JobRoles = () => {
    return (
        <>
            <div className='d-flex'>
                <div>
                    <ul>
                        <li><Link to="/react" >React</Link></li>
                        <li><Link to="/javascript" >JavaScript</Link></li>
                        <li><Link to="/frontend" >Frontend</Link></li>
                    </ul>
                </div>
                <div>
                <Routes>
          <Route path="react" element={<ReactJS />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="frontend" element={<FrontendJob />} />
        </Routes>
                </div>
            </div>
        </>
    )
}

export default JobRoles
