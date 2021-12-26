import React from 'react'
import { Link } from 'react-router-dom'
import Qimg from "../Images/question.png"

const Questions = () => {
    return (
        <>
             <div className="container questions d-flex">
                <div className="questions--LeftSidebar d-block" style={{width:"10rem"}}>
                    {sideTabs.map((tab)=>{
                        return <button className=' btn text-muted list-group-item list-group-item-action m-1' href="#list-item-1">{tab}</button>
                        
                    })}
                   
                    <div className='card text-left'>
                    <div className='card-body'>
                        <p><b>Stack Overflow for Teams -</b>Collaborate and share knowledge with a private group.</p>
                        <img src={Qimg} alt="IMG" />
                        <button className='btn btn-primary btn-sm'>Create a free Team</button>
                        <Link to="/">What is Teams?</Link>
                        </div>
                    
                    </div>
                </div>
                <div className="questions--body">
                    <div className="d-flex">
                        <h2>Questions tagged [javascript]</h2>
                        <button className="btn btn-primary btn-small">Ask Question</button>
                    </div>
                </div>
                <div className="questions-rightSidebar">
                    <div className="card">
                    <div className="card-header">
                    The Overflow Blog
                    </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}

export default Questions

const sideTabs=["Home","Public", "Questions","Tags","Users","Collectives","Explore collective Collective","Find a JOB","Jobs","Companies","TEAMS" ]
