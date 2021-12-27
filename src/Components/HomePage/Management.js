import React from "react";
import "./Management.scss";

const Management = () => {
  return (
    <>
      <div className="management">
        <div className="management--miniCard d-flex justify-content-center">
          {miniCard.map((card) => {
            return (
              <div
                class="card px-5 mx-4 py-4"
                style={{
                  backgroundColor: "rgb(214, 217, 220)",
                  width: "15rem",
                }}
              >
                <img src={process.env.PUBLIC_URL + card.img} alt="img" width="120px" />
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="teams d-flex mx-5 px-5">
        {managementTeam.map((card) => {
          return (
            <div className="card mx-3 mb-5 px-4 teams--card">
              <img src={process.env.PUBLIC_URL + card.img} alt="img" width="120px" />
              <p>{card.content}</p>
              <hr />
              <div className="teams--deg">
                <p className="teams--deg--name">{card.deg}</p>
                <p>{card.office}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Management;

const miniCard = [
  {
    img: "../Images/key.png",
    text: "Robust read and write API",
  },
  {
    img: "../Images/lock.png",
    text: "Single sign-on with AD or SAML",
  },
  {
    img: "../Images/users.png",
    text: "Your own customer success representative",
  },
  {
    img: "../Images/headphone.png",
    text: "99.5% uptime SLA and priority support",
  },
];

const managementTeam = [
  {
    img: "../Images/coma.png",
    content:
      "Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals.",
    deg: "Director of Product",
    office: "Microsoft",
  },
  {
    img: "../Images/coma.png",
    content:
      "What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases.",
    deg: "Software Engineer",
    office: "Box",
  },
  {
    img: "../Images/coma.png",
    content:
      "Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.",
    deg: "Director of Engineering",
    office: "Elastic Cloud",
  },
  {
    img: "../Images/coma.png",
    content:
      "As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.",
    deg: "Engineering",
    office: "Expensify",
  },
];
