import React from "react";
import { Page } from "./App";
import Logo from "../../assets/mm.svg";
import Sapper from "../../assets/icons/goblin_sapper_charge.jpg";
import Grenade from "../../assets/icons/grenade.jpg";

const Home = ({ setCurrentPage }) => (
  <div>
    <Logo className="mx-auto mb-10 pt-5" />
    <div className="flex justify-around space-x-8">
      <div
        className="cursor-pointer bg-gray-600 p-2 rounded-lg mb-4 flex-grow flex justify-between w-1/2"
        onClick={() => setCurrentPage(Page.Sapper)}
      >
        <span className="self-end text-2xl">Goblin Sapper Charge</span>
        <img
          src={Sapper}
          alt="Goblin Sapper Charge"
          title="Goblin Sapper Charge"
          className="inline rounded-md"
        />
      </div>
      <div
        className="cursor-pointer bg-gray-600 p-2 rounded-lg mb-4 flex-grow flex justify-between w-1/2"
        onClick={() => setCurrentPage(Page.ThoriumGrenade)}
      >
        <span className="self-end text-2xl">Thorium Grenade</span>
        <img
          src={Grenade}
          alt="Thorium Grenade"
          title="Thorium Grenade"
          className="inline rounded-md"
        />
      </div>
    </div>
  </div>
);

export default Home;
