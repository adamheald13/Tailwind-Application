import React, { useState, useCallback } from "react";
import Home from "./Home";
import Sapper from "../calculators/Sapper";
import ThoriumGrenade from "../calculators/ThoriumGrenade";
import Header from "./Header";

export enum Page {
  Home,
  Sapper,
  ThoriumGrenade,
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(Page.Home);

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
    <div className="container mx-auto">
      <Header
        page={currentPage}
        setPageHome={() => setCurrentPage(Page.Home)}
      />
      {renderPage()}
    </div>
  );
};

export default App;
