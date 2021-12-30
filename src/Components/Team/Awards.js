import React from 'react'
import "./Awards.scss"

let awards=[
    {
        img: "../Images/g2.png",
        header:"G2 Awards",
        text1:"We’re a seasoned winner",
        text2:"2019-2021"
    },
    {
        img: "../Images/remote.png",
        header:"RemoteTech Awards",
        text1:"Developer Collaboration Platform",
        text2:"2021"
    },
    {
        img: "../Images/saad.png",
        header:"The SaaS Awards",
        text1:"Best SaaS for Productivity",
        text2:"2021"
    },
    {
        img: "../Images/award.png",
        header:"APPEALIE SaaS Awards",
        text1:"Collaboration + Productivity",
        text2:"2021"
    },
]

const Awards = () => {
    return (
        <>
        <div className="awards d-flex justify-content-center">
           {awards.map((award)=>{
               return  <div className='mx-5  text-center'>
                        <img src={award.img} alt="" className='rounded-circle'/>
                        <h5>{award.header}</h5>
                        <p>{award.text1} <br />{award.text2} </p>
                        <hr />
                </div>
           })}
           </div>
        </>
    )
}

export default Awards;



