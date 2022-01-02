import React from 'react';
import "./JobRoles.scss";
import job1 from "../Images/job1.png"
import { Link } from 'react-router-dom';

let jobs=[
    {
        name:"React Developer (Remote)",
        img:"../Images/job1.png",
        place:"X-Team",
        jobType:" No office location",
        WorkType1:"reactjs",
        WorkType2:"typescript",
        WorkType3:"webpack",
        WorkType4:"amazon-web-services",
        WorkType5:"redux",
        post:"13d ago",
        type:"Remote",
    },

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
        post:"5d ago",
        type:"Remote",
    },
    {
        name:"Senior Front end",
        img:"../Images/job1.png",
        place:"Request ",
        jobType:" No office location",
        WorkType1:"user-experience",
        WorkType2:"testing",
        WorkType3:"typescript",
        WorkType4:"javascript",
        WorkType5:"reactjs",
        post:"25d ago",
        type:"Remote",
    },

    {
        name:"Python / Django and React / Typescript Developers",
        img:"../Images/job1.png",
        place:"OpenUnited",
        jobType:" No office location",
        WorkType1:"reactjs",
        WorkType2:"python",
        WorkType3:"django",
        WorkType4:"",
        WorkType5:"",
        post:"7d ago",
        type:"Remote",
    },
    {
        name:"Full-Stack JavaScript Developer (Remote)",
        img:"../Images/job1.png",
        place:"X-Team",
        jobType:" No office location",
        WorkType1:"javascript",
        WorkType2:"reactjs",
        WorkType3:"node.js",
        WorkType4:"typescript",
        WorkType5:"amazon-web-services",
        post:"2d ago",
        type:"Remote",
    },
    {
        name:"Frontend Engineer",
        img:"../Images/job1.png",
        place:"Whitespectre ",
        jobType:" No office location",
        WorkType1:"ruby-on-rails",
        WorkType2:"go",
        WorkType3:"go",
        WorkType4:"",
        WorkType5:"",
        post:"3d ago",
        type:"Remote",
    },
    {
        name:"Senior/Front End Engineer, APAC",
        img:"../Images/job1.png",
        place:"Coda Payments",
        jobType:" No office location",
        WorkType1:"javascript",
        WorkType2:"vue.js",
        WorkType3:"vuejs2",
        WorkType4:"api",
        WorkType5:"node.js",
        post:"28d ago",
        type:"Remote",
    },
    {
        name:"Remote Polyglot Software Engineer – TDD, XP, JavaScript",
        img:"../Images/job1.png",
        place:"Pragmateam",
        jobType:" No office location",
        WorkType1:"javascript",
        WorkType2:"reactjs",
        WorkType3:"node.js",
        WorkType4:"kotlin",
        WorkType5:"tdd",
        post:"2d ago",
        type:"Remote",
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
