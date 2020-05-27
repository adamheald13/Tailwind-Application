import React from "react";
import { Page } from "./App";
import Sapper from "../../assets/icons/goblin_sapper_charge.jpg";
import Grenade from "../../assets/icons/grenade.jpg";

const Home = ({ setCurrentPage }) => (
  <div className="flex justify-center space-x-8">
    <div
      className="item-card cursor-pointer"
      onClick={() => setCurrentPage(Page.Sapper)}
    >
      <span className="item-card-text">Goblin Sapper Charge</span>
      <img
        src={Sapper}
        alt="Goblin Sapper Charge"
        title="Goblin Sapper Charge"
        className="item-card-img"
      />
    </div>
    <div
      className="item-card cursor-pointer"
      onClick={() => setCurrentPage(Page.ThoriumGrenade)}
    >
      <span className="item-card-text">Thorium Grenade</span>
      <img
        src={Grenade}
        alt="Thorium Grenade"
        title="Thorium Grenade"
        className="item-card-img"
      />
    </div>
  </div>
);

export default Home;
