import React from 'react';
import "./ToolIntegrates.scss"
import microsoft from "../Images/microsoft.png"
import Slack from "../Images/slack.png"
import MicrosoftLogo from "../Images/tool2.png"
import SlackLogo from "../Images/tool1.png"

const ToolIntegrates = () => {
    return (
        <>
          <div className='toolIntegrates'>
           <div className='toolIntegrates d-flex justify-content-between my-5 py-5'>
           <div className='d-block'>
           <img src={microsoft} alt="microsoft" width="500px" />
           <div className= "d-flex ml-5" ><img src={MicrosoftLogo} alt="MicrosoftLogo" width="40px" className=' ml-5'/><p className='text-light  ml-2 '>Microsoft</p></div>
           </div>
            <div>
            <div className='d-block'>
            <div className= "d-flex" >
           
           <img src={SlackLogo} alt="SlackLogo" width="40px" className=' ml-5'/>
           <p className='text-light  ml-2'>Slack</p></div>
          
            <img src={Slack} alt="Slack" width="500px" />
            </div>
            </div>
           </div>
          </div>  
        </>
    )
}

export default ToolIntegrates
