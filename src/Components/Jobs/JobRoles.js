import React from 'react';
import "./JobRoles.scss";
import job1 from "../Images/job1.png"
import { Link } from 'react-router-dom';

const JobRoles = () => {
    return (
        <>
            <div className='d-flex'>
              {/* Right Side started */}
                <div className='d-flex'>
                   <div className='' style={{width:"40%"}}>
                       <img src={job1} alt="" width="60px" className='rounded'/>
                   </div>
                   <div><h5><Link to="/" className='font-weight-normal'>Experienced Frontend (GraphQL / React / Typescript) Developers</Link></h5>
                   <p>Theorem, LLC • <span className='text-muted'> No office location</span></p>
                   <div>
                       <button className="btn btn-outline-primary">reactjs</button>
                       <button className="btn btn-outline-primary">reactjs</button>
                       
                   </div>
                   </div>
                </div>

                {/* Right Side started */}
                <div className='ml-5'>
                <h2>Experienced Frontend (GraphQL / React / Typescript) Developers</h2>

                </div>
            </div>
        </>
    )
}

export default JobRoles
