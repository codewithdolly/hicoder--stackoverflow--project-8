import React from 'react';
import "./JobRoles.scss";
import job1 from "../Images/job1.png"
import { Link } from 'react-router-dom';

let jobs=[
    {
        name:"Experienced Frontend (GraphQL / React / Typescript) Developers",
        img:"../Images/job1.png",
        place:"Theorem, LLC",
        jobType:" No office location",
        WorkType1:"reactjs",
        WorkType2:"javascript",
        WorkType3:"figma",
        WorkType4:"typescript",
        WorkType5:"redux",
    },
    {
        name:"React Developer (Remote)",
        img:"../Images/job1.png",
        place:"Theorem, LLC",
        jobType:" No office location",
        WorkType1:"reactjs",
        WorkType2:"javascript",
        WorkType3:"figma",
        WorkType4:"typescript",
        WorkType5:"redux",
    },
]

const JobRoles = () => {
    return (
        <>
            <div className='d-flex border'>
              {/* Right Side started */}
                <div className=' border-right p-2'>
                 {jobs.map((job)=>{
                     return <>
                     <div className='d-flex border-bottom my-2'>
                     <div className='' style={{width:"40%"}}>
                       <img src={job1} alt="" width="60px" className='rounded'/>
                   </div>
                   <div><h5><Link to="/" className='font-weight-normal'>Experienced Frontend (GraphQL / React / Typescript) Developers</Link></h5>
                   <p>Theorem, LLC • <span className='text-muted'> No office location</span></p>
                   <div className='btns'>
                   <button className="btn jobButtonColor">reactjs</button>
                   <button className="btn jobButtonColor">JavaScript</button>
                   <button className="btn jobButtonColor">Figma</button>
                   <button className="btn jobButtonColor">Typescript</button>
                   <button className="btn jobButtonColor">figma</button>  
                   </div>
                   <p>10d ago • <span className='text-muted'> Remote</span></p>
                   </div>
                   </div>
                     </>
                 })}
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
