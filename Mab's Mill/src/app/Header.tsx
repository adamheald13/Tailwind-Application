import React from "react";
import { Page } from "./App";
import Logo from "../../assets/mm.svg";
import SapperIcon from "../../assets/icons/goblin_sapper_charge.jpg";
import GrenadeIcon from "../../assets/icons/grenade.jpg";

const Header = ({ page = Page.Home, setPageHome }) => {
  const renderHome = () => <Logo className="mx-auto mb-6 mt-4" />;
  const renderSapper = () => (
    <img
      className="mx-auto rounded-lg mb-6 mt-4"
      src={SapperIcon}
      alt="Goblin Sapper Charge"
      title="Goblin Sapper Charge"
      width="144px"
    />
  );
  const renderGrenade = () => (
    <img
      className="mx-auto rounded-lg mb-6 mt-4"
      src={GrenadeIcon}
      alt="Thorium Grenade"
      title="Thorium Grenade"
      width="144px"
    />
  );

  const renderPageImage = () => {
    switch (page) {
      case Page.Home:
        return renderHome();
      case Page.Sapper:
        return renderSapper();
      case Page.ThoriumGrenade:
        return renderGrenade();
    }
  };

  return (
    <>
      {renderPageImage()}
      {page !== Page.Home ? (
        <div className="relative">
          <button
            onClick={setPageHome}
            className="text-mage-blue absolute -top-24"
          >
            {"< Back"}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Header;
