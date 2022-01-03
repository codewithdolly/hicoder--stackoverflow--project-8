import React from 'react'
import "./SingleJobInDetails.scss"

const SingleJobInDetails = () => {
    return (
        <>
            <div className='singleJobInDetails'>
                <p className='text-muted'> <i class="far fa-clock mr-2"></i> Posted 19 days ago</p>

                <h4 className='font-weight-normal'>About this job</h4>
                <p>Job type: <b> Full-time</b></p>
                <p>Experience level: <b>Senior</b></p>
                <p>Role:<b> Frontend Developer</b></p>
                <p>Industry:<b> Consulting, Digital Agency, Software Development</b></p>
                <p>Company size:<b>  51-200 people</b></p>
                <p>Company type: <b>Private</b></p>
            </div>
            <br />
            <hr />
            <h5 className='font-weight-normal'>Technologies</h5>
            <div>
                <button className="btn jobButtonColor">reactjs</button>
                <button className="btn jobButtonColor">javascript</button>
                <button className="btn jobButtonColor">figma</button>
                <button className="btn jobButtonColor">typescript</button>
                <button className="btn jobButtonColor">redux</button>
            </div>
            <br />
            <div>
            <h5 className='font-weight-normal'>Job description</h5>
            <p className='mr-4'>Join our global team of 300+ craftspeople to support our growing distributed services business. We are on a mission to dismantle the traditional consulting ecosystem and replace it with an effective framework for innovation that transforms the way businesses think about and solve problems from the inside out.</p>
            <p  className='mr-4'><b> WHAT YOU'LL DO</b> As Frontend Engineer you will work on Agile, cross-functional squads to scope, design and build scalable, performant and secure web applications. You will code, create, and review pull requests daily and engage the client to research and discover the "why" and propose and deliver optimal solutions. <b>WHO YOU ARE</b> As our Frontend Engineer, you have deep knowledge of the JavaScript language and experience working with modern React and common React packages. You have a thorough understanding of the options and tools available for managing an application’s state and their underlying functional programming concepts. You are a passionate technologist with the discipline to create and finish projects. You have opinions about your favorite open source projects, or perhaps you have contributed to some or started one of your own. You are a great communicator and are active in your development community. Whether you are raising the flag within an implementation or sharing your favorite playlist in Slack, you will not shy away from letting your voice be heard. RESPONSIBILITIES AND DUTIES</p>

            {/* responsiblity adding */}
            <ul className='ml-4'>
                {responsiblity.map((text)=>{
                    return <>
                        <li>{text}</li>
                    </>
                })}
            </ul>

{/* qualifications adding */}
            <h6 className='font-weight-normal'>QUALIFICATIONS AND SKILLS</h6>
            <ul className='ml-4'>
                {qualifications.map((text)=>{
                    return <>
                        <li>{text}</li>
                    </>
                })}
            </ul>

{/* suggestion adding */}
            <h6 className='font-weight-normal'>YOU WILL BE SUCCESSFUL WHEN</h6>
            <ul className='ml-4'>
                {suggestion.map((text)=>{
                    return <>
                        <li>{text}</li>
                    </>
                })}
            </ul>
<button className="btn btn-primary"><i class="fas fa-paper-plane mr-1"></i> Apply Now</button>
<hr /><hr />
            </div>
           
        </>
    )
}

export default SingleJobInDetails;

const responsiblity=[
    `Write clean, efficient, performant and secure code to build web applications`,
    `Provide input on app architecture`,
    `Work with product designers and clients to clarify requirements`,
    `Plan, estimate and prioritize work on a cross functional collaborative team`,
    `Collaborate in a consultative environment`,
    `Guide our clients in best practices in order to achieve great project success`
]

const qualifications=[
    `5 + years of professional development experience`,
    `Strong front end development experience ideally with single-page applications`,
    `Experience with 2 or more of the following frameworks & libraries, and programming languages including, but not limited to React, Redux, Thunk/Saga, Immutable, VueJS, NodeJS Docker, AWS, Glamorous.`,
    `Strong experience using vanilla JavaScript is required`,
    `Practical knowledge of Typescript is required, and production experience is a strong plus`,
    `Previous experience collaborating in a quality-focused environment where testing and reviewing is a part of the everyday process`,
    `Strong experience with semantic HTML and familiarity with web accessibility best practices`,
    `Familiar with various approaches to styling - from plain CSS to CSS-in-JS, and methodologies for organizing CSS`,
    `You are familiar and are comfortable using design tools such as Illustrator, Sketch, Zeplin, Figma, Principle, Framer or similar is helpful`,
    `Experience with modern UI/UX design principles is a strong plus`,
    `Experience with modern backend technologies and API design/best practices is nice to have`,
    `Experience with containerization and orchestration tools (Docker and Kubernetes) is a bonus`
]

const suggestion= [
    `You are able to hit the ground running within your area of expertise and are not afraid of challenges outside of it`,
    `Thrive on collaborating with other team members and across disciplines`,
    `You are happy to receive feedback and see it as an opportunity for reflection and improvement`,
    `You are always learning - Whether you are learning to help your team and customer work through new concepts and technology`,
    `You are astute, you know when to push an issue and when to let things lie`,
    `You are friendly - you reach out to your teammates even if they aren’t on your project team`,
    `You can work through ambiguity - you aren’t shy about asking questions to gain clarity`,
    `Entrepreneurial and intrapreneurial - always on the lookout for new opportunities to improve the company externally and internally`,
]


