import React from "react";
import "./style2.css";
import hancy from "./img2/hancy.png";
import aaku from "./img2/aaku.png";
import abinash from "./img2/abnsh.png";
import bridbalak from "./img2/bridbalak.png";
import dear from "./img2/dear.png";
import dipen from "./img2/dipen.png";
import ikku from "./img2/ikku.png";
import rajmaster from "./img2/rajmasr.png";
import ranji from "./img2/ranji.png";
import samir from "./img2/samir.png";
import suyog from "./img2/suog.png";
import sushal from "./img2/sushal.png";
import rishi from "./img2/rishi.png";
import "./style2.css";
export const Team = () => {

  return (
    <div>
      <h1>Organizing members</h1>
      <div className="team-container">
        <h2 className="team-name">Event Lead</h2>
        <div className="team-img">
          <img src={samir} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Resources</h2>
        <div className="team-img ">
          <img src={hancy} alt="" />
          <img src={ikku} alt="" />
          <img src={aaku} alt="" />
          <img src={suyog} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Technical Team</h2>
        <div className="team-img ">
          <img src={dear} alt="" />
          <img src={suyog} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Outreach Team</h2>
        <div className="team-img">
          <img src={hancy} alt="" />
          <img src={rishi} alt="" />
          <img src={suyog} alt="" />
          <img src={ranji} alt="" />
          <img src={dear} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Graphics</h2>
        <div className="team-img">
          <img src={abinash} alt="" />
          <img src={dipen} alt="" />
          <img src={sushal} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Web Team</h2>
        <div className="team-img">
          <img src={hancy} alt="" />
          <img src={rajmaster} alt="" />
          <img src={rishi} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Event host</h2>
        <div className="team-img">
          <img src={rajmaster} alt="" />
          <img src={ikku} alt="" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="team-name">Media</h2>
        <div className="team-img">
          <img src={ranji} alt="" />
          <img src={bridbalak} alt="" />
        </div>
      </div>
    </div>
  );
};
