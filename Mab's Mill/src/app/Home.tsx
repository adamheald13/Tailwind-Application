import React from "react";
import { Page } from "./App";

const Home = ({ setCurrentPage }) => (
  <div>
    <div className="cursor-pointer" onClick={() => setCurrentPage(Page.Sapper)}>
      Sapper
    </div>
    <div
      className="cursor-pointer"
      onClick={() => setCurrentPage(Page.ThoriumGrenade)}
    >
      ThoriumGrenade
    </div>
  </div>
);

export default Home;
