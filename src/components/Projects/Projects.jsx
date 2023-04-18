import React from "react";
import "../Projects/project.css";

import SimpleImageSlider from "react-simple-image-slider";
import p11 from "../../assets/p1-1.png";
import p12 from "../../assets/p1-2.png";
import p13 from "../../assets/p1-3.png";
import p14 from "../../assets/p1-4.png";
import p15 from "../../assets/p1-5.png";
import p16 from "../../assets/p1-6.png";
import p17 from "../../assets/p1-7.png";
import p21 from "../../assets/p2-1.png";
import p22 from "../../assets/p2-2.png";
import p23 from "../../assets/p2-3.png";
import p31 from "../../assets/p3-1.png";
import p32 from "../../assets/p3-2.png";
import p33 from "../../assets/p3-3.png";
import p34 from "../../assets/p3-4.png";
import p41 from "../../assets/p4-1.png";
import p42 from "../../assets/p4-2.png";
import p43 from "../../assets/p4-3.png";


const Projects = () => {
  const images1 = [p11, p12, p13, p14, p15, p16, p17];
  const images2 = [p21, p22, p23];
  const images3 = [p31, p32, p33,p34];
  const images4 = [p41, p42, p43];

  return (
    <div className="projects-container">
      <div className="card">
        <SimpleImageSlider
          width={1150}
          height={650}
          images={images1}
          showBullets={true}
          showNavs={true}
        />
        <h1>Event Proposal Page</h1>
        <p>
          The Event Proposal Page project aims to create a platform that allows
          event vendors to showcase their services and for users to select and
          book the vendor of their choice. The platform will have two types of
          users: vendors and customers. Vendors will be required to authenticate
          their accounts before they can access the platform, and customers will
          be required to sign up or log in using their email and password. The
          platform will display all proposals submitted by the vendors. Each
          proposal will have a detailed description of the services offered,
          pricing, and any other relevant information. Customers will be able to
          browse through the proposals and select one that meets their needs.
          Customers will be allowed to select only one proposal per event.
        </p>
        <button><a href="https://eventproposalpage-project.netlify.app/" target="_blank">See Live </a></button>
      </div>

      <div className="card">
      <SimpleImageSlider
          width={1150}
          height={650}
          images={images2}
          showBullets={true}
          showNavs={true}

        />
        <h1>ToDo List</h1>
        <p>
        A todo list is a simple but effective tool used for organizing and managing tasks and activities. It typically consists of a list of items or tasks that need to be completed. The purpose of a todo list is to help the user keep track of what needs to be done, prioritize tasks, and stay focused on their goals. By breaking down larger projects into smaller, manageable tasks, a todo list can also help reduce stress and increase productivity.
        </p>
        <button><a href="https://elimillasrinivas.github.io/Todo-List-App/">See Live </a></button>
      </div>

      <div className="card">
      <SimpleImageSlider
          width={1150}
          height={650}
          images={images4}
          showBullets={true}
          showNavs={true}

        />
        <h1>Calculator</h1>
        <p>
        A calculator built using HTML, CSS, and JavaScript is a simple yet effective project.
        The calculator designed using HTML and CSS to create the user interface. The interface typically includes a display area for showing the input and output, as well as buttons for numbers, operators, and functions. CSS can be used to style the interface and make it visually appealing.The calculator's functionality can be implemented using JavaScript.
        </p>
        <button><a href="https://elimillasrinivas.github.io/Calculator/">See Live </a></button>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="sde"
        />
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="sde"
        />
      </div>
    </div>
  );
};

export default Projects;
