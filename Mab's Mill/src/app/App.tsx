import React, { useState, useCallback } from "react";
import Home from "./Home";
import Sapper from "../calculators/Sapper";
import ThoriumGrenade from "../calculators/ThoriumGrenade";

export enum Page {
  Home,
  Sapper,
  ThoriumGrenade,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(Page.Home);

  const onHomeClick = useCallback(() => setCurrentPage(Page.Home), [
    setCurrentPage,
  ]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setCurrentPage={setCurrentPage} />;
      case Page.Sapper:
        return <Sapper />;
      case Page.ThoriumGrenade:
        return <ThoriumGrenade />;
    }
  };

  return (
    <>
      <div id="header" className="border-b-4 border-warrior-brown bg-mage-blue">
        <span className="cursor-pointer" onClick={onHomeClick}>
          Mab's Mill
        </span>
      </div>
      {renderPage()}
    </>
  );
};

export default App;
