import React from "react";
import "./Billing.scss";

const Billing = () => {
  return (
    <>
      {/*  Annual billing starts */}
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
        {/* Annual billing cars started */}
        <div className="d-flex ml-5">
          {cards.map((card) => {
            return (
              <div class="card mx-2" style={{ width: "20rem" }}>
                <div className="card-body " align="left">
                  {card.btnTop}
                  <h4>{card.money}</h4>
                  <p class="card-title  text-muted">{card.require}</p>
                  {card.break}
                  <p class="card-text text-muted">
                    {card.icon0}
                    {card.text0}
                  </p>
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

                  <p class="card-text">
                    {card.icon4}
                    {card.text4}
                  </p>

                  <p class="card-text">
                    {card.icon5}
                    {card.text5}
                  </p>

                  <p class="card-text">
                    {card.icon6}
                    {card.text6}
                  </p>

                  {card.btnDown}
                  <p className="text-muted" align="center">
                    <small>{card.team}</small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Annual billing cars Ends */}

        {/* investment parts started */}
        <div className="billing--info d-flex text-light">
          <p className="billing--info--content">
            A Forrester Consulting study shows{" "}
            <h4>179% return on investment </h4> with Stack Overflow for Teams.
          </p>
          <p className="billing--info--content">
            The world’s largest telecom firm <h4>saved $10M</h4> in deflected
            support cases with our centralized knowledge base.
          </p>
          <p className="billing--info--content">
            Subject-matter experts at software platform Unqork had{" "}
            <h4>27% more time</h4> to work on projects after using Teams.
          </p>
          <div className="content2 billing--info--content  mr-5">
            <p>You can save time and money with Stack Overflow for Teams</p>
            <button className="btn btn-outline">Calculate your RIO</button>
          </div>
        </div>
        {/* investment parts Ends */}
      </div>
      {/*  Annual billing Ends */}
    </>
  );
};

export default Billing;


// cards details in object
const cards = [
  {
    btnTop: (
      <button
        className="btn px-3 text-light  mb-2"
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
      <button
        class="btn btn-block text-light"
        style={{ backgroundColor: " rgb(242, 116, 13)" }}
      >
        Create a free team
      </button>
    ),
    team: "Always free up to 50 teammates",
  },

  {
    btnTop: (
      <button
        className="btn px-3 mb-2"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.418)" }}
      >
        Basic
      </button>
    ),
    money: "$6 USD",
    require: "per teammate / month",
    break: <hr />,
    icon1: <i class="fas fa-bullhorn mr-2"></i>,
    text1: "Single sign-on (SSO) with SAML + Okta integration",
    icon2: <i class="fas fa-award mr-2"></i>,
    text2: `ChatOps integrations - Slack & Microsoft Teams`,
    icon3: <i class="fas fa-box mr-2"></i>,
    text3: " Your own private space hosted on stackoverflow.com",
    icon4: <i class="fas fa-box mr-2"></i>,
    text4: "Structured and searchable knowledge base",
    btnDown: (
      <button
        class="btn btn-block "
        style={{ backgroundColor: "rgba(128, 128, 128, 0.418)" }}
      >
        Get Started
      </button>
    ),
    team: "Up to 250 teammates",
  },

  {
    header: "RECOMMENDED",
    headerIcon: <i class="fas fa-box mr-2"></i>,
    btnTop: (
      <button className="btn px-2 text-light bg-dark mb-2">Business</button>
    ),
    money: "$12 USD",
    require: "per teammate / month",
    break: <hr style={{ backgroundColor: " rgb(242, 116, 13)" }} />,
    icon0: <i class="fas fa-box mr-2"></i>,
    text0: "All the features of Basic plus…",
    icon1: <i class="fas fa-bullhorn mr-2"></i>,
    text1: " Long-form knowledge with Articles",
    icon2: <i class="fas fa-award mr-2"></i>,
    text2: `Additional integrations — ChatOps, Jira, GitHub & Okta`,
    icon3: <i class="fas fa-box mr-2"></i>,
    text3: "Group content together into Collections",
    icon4: <i class="fas fa-box mr-2"></i>,
    text4: "Usage and adoption metrics",
    icon5: <i class="fas fa-box mr-2"></i>,
    text5: "Priority customer support",
    icon6: <i class="fas fa-box mr-2"></i>,
    text6: "Content Health tools",
    btnDown: (
      <button
        class="btn btn-block text-light bg-dark"
        style={{ backgroundColor: " rgb(242, 116, 13)" }}
      >
        Get Started
      </button>
    ),
    team: "Unlimited teammates",
  },

  {
    btnTop: (
      <button
        className="btn px-2 text-light  mb-2"
        style={{ backgroundColor: "#2b2d6e" }}
      >
        Enterprise
      </button>
    ),
    money: "Custom pricing",
    require: "Let’s talk about what you need",
    break: <hr style={{ backgroundColor: " rgb(242, 116, 13)" }} />,
    icon0: <i class="fas fa-box mr-2"></i>,
    text0: "Premium features of Business plus…",
    icon1: <i class="fas fa-bullhorn mr-2"></i>,
    text1: "Unlimited Teams within your instance",
    icon2: <i class="fas fa-award mr-2"></i>,
    text2: `Flexible hosting options — cloud or on-premises`,
    icon3: <i class="fas fa-box mr-2"></i>,
    text3: "Robust read and write API",
    icon4: <i class="fas fa-box mr-2"></i>,
    text4: "Your own customer success and community building representative",
    icon5: <i class="fas fa-box mr-2"></i>,
    text5: "99.5% uptime SLA and priority support",
    btnDown: (
      <button
        class="btn btn-block text-light"
        style={{ backgroundColor: "#2b2d6e" }}
      >
        Request a demo
      </button>
    ),
    team: "Unlimited teammates",
  },
];
