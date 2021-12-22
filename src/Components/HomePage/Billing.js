import React from "react";

const Billing = () => {
  return (
    <>
      <div className="billing ">
        <div class="custom-control custom-switch m-5" align="left">
          <input
            type="checkbox"
            class="custom-control-input p-4"
            id="customSwitch1"
          />
          <label class="custom-control-label text-light" for="customSwitch1">
            Annual billing discount
          </label>
        </div>
        <div className="d-flex">
       {cards.map((card)=>{
           return  <div class="card mx-3" style={{ width: "18rem" }}>
          <div class="card-body " align="left">
            {card.btnTop}
            <h4>{card.money}</h4>
            <p class="card-title  text-muted">{card.require}</p>
            {card.break}
            <p class="card-text">
             {card.icon1}
             {card.text1}
            </p>
            <p class="card-text">
            {card.icon2}
             {card.text2}
            </p>
            <p class="card-text">
            {card.icon3}
             {card.text3}
            </p>
            {card.btnDown}
            <p className="text-muted" align="center">
              <small>{card.team}</small>
            </p>
          </div>
        </div>
       })}
       </div>
      </div>
    </>
  );
};

export default Billing;

const cards = [
  {
    btnTop: (
      <button
        className="btn px-4 text-light"
        style={{ backgroundColor: " rgb(242, 116, 13)" }}
      >
        Free
      </button>
    ),
    money: "Free",
    require: "No credit card required",
    break: <hr style={{ backgroundColor: " rgb(242, 116, 13)" }} />,
   
    icon1: <i class="fas fa-bullhorn mr-2"></i>,
    text1: " ChatOps integrations - Slack & Microsoft Teams",
    icon2: <i class="fas fa-award mr-2"></i>,
    text2: `Your own private space hosted on
    stackoverflow.com`,
    icon3: <i class="fas fa-box mr-2"></i>,
    text3: " Structured and searchable knowledge base",
    btnDown: (
        <button class="btn btn-block text-light"  style={{ backgroundColor: " rgb(242, 116, 13)"}}>Create a free team</button>
      ),
      team:"Always free up to 50 teammates",
  },

];
