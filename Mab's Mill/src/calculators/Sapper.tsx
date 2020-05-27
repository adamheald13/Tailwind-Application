import React, { useState, useEffect } from "react";
import TriggerIcon from "../../assets/icons/unstable_trigger.jpg";
import MageweaveIcon from "../../assets/icons/mageweave_cloth.jpg";
import MithrilIcon from "../../assets/icons/mithril_bar.jpg";
import PowderIcon from "../../assets/icons/solid_blasting_powder.jpg";
import {
  calculateNumberOfSappers,
  calculateNumberOfSappersRaw,
} from "../utils/sapperUtils";

const Sapper = () => {
  const [sapperCount, setSapperCount] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);
  const [mageweaveCount, setMageweaveCount] = useState(0);
  const [mithrilCount, setMithrilCount] = useState(0);
  const [powderCount, setPowderCount] = useState(0);

  const [triggersNeeded, setTriggersNeeded] = useState(0);

  const onInputChange = (stateSetter) => (event) => {
    const value = event.target.value;
    stateSetter(value < 0 ? 0 : value);
  };

  const calculateNumberOfSapperCrafts = () => {
    const craftsWithCurrentTriggers = calculateNumberOfSappers(
      mageweaveCount,
      powderCount,
      triggerCount
    );

    const leftoverMageweave = mageweaveCount - craftsWithCurrentTriggers;
    const leftoverMithril = mithrilCount;
    const leftoverPowder = powderCount - craftsWithCurrentTriggers * 3;

    const craftsFromLeftovers = calculateNumberOfSappersRaw(
      leftoverMageweave,
      leftoverPowder,
      leftoverMithril
    );

    setTriggersNeeded(craftsFromLeftovers);
    setSapperCount(craftsWithCurrentTriggers + craftsFromLeftovers);
  };

  useEffect(() => calculateNumberOfSapperCrafts(), [
    triggerCount,
    mageweaveCount,
    mithrilCount,
    powderCount,
  ]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mt-4">Goblin Sapper Charges: {sapperCount}</h1>
      <div className="flex justify-center flex-wrap">
        <div className="item-card border border-gray-200">
          <label className="item-card-text">Unstable Trigger</label>
          <input
            className="item-card-input"
            type="number"
            value={triggerCount}
            onChange={onInputChange(setTriggerCount)}
          />
          <img
            className="item-card-img"
            src={TriggerIcon}
            alt="Unstable Trigger"
            title="Unstable Trigger"
          />
        </div>
        <div className="item-card">
          <label className="item-card-text">Mageweave Cloth</label>
          <input
            className="item-card-input"
            type="number"
            value={mageweaveCount}
            onChange={onInputChange(setMageweaveCount)}
          />
          <img
            className="item-card-img"
            src={MageweaveIcon}
            alt="Mageweave Cloth"
            title="Mageweave Cloth"
          />
        </div>
        <div className="item-card">
          <label className="item-card-text">Mithril Bar</label>
          <input
            className="item-card-input"
            type="number"
            value={mithrilCount}
            onChange={onInputChange(setMithrilCount)}
          />
          <img
            className="item-card-img"
            src={MithrilIcon}
            alt="Mithril Bar"
            title="Mithril Bar"
          />
        </div>
        <div className="item-card">
          <label className="item-card-text">Solid Blasting Powder</label>
          <input
            className="item-card-input"
            type="number"
            value={powderCount}
            onChange={onInputChange(setPowderCount)}
          />
          <img
            className="item-card-img"
            src={PowderIcon}
            alt="Solid Blasting Powder"
            title="Solid Blasting Powder"
          />
        </div>
      </div>
      <div>
        <span className="text-xl">
          <span className="text-mage-blue">{triggersNeeded}</span> more{" "}
          <span className="text-warrior-brown">Unstable Triggers</span> will
          need to be crafted
        </span>
      </div>
    </div>
  );
};

export default Sapper;
