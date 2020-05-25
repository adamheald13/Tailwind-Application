import React, { useState, useEffect } from "react";
import goblinSapperCharge from "../../assets/icons/goblin_sapper_charge.jpg";
import unstableTrigger from "../../assets/icons/unstable_trigger.jpg";
import mageweaveCloth from "../../assets/icons/mageweave_cloth.jpg";
import mithrilBar from "../../assets/icons/mithril_bar.jpg";
import solidBlastingPowder from "../../assets/icons/solid_blasting_powder.jpg";

const App = () => {
  const [sapperCount, setSapperCount] = useState(0);
  const [unstableTriggerCount, setUnstableTriggerCount] = useState(0);
  const [mageweaveCount, setMageweaveCount] = useState(0);
  const [mithrilCount, setMithrilCount] = useState(0);
  const [powderCount, setPowderCount] = useState(0);

  const onMageweaveChange = (event) => setMageweaveCount(event.target.value);
  const onMithrilChange = (event) => setMithrilCount(event.target.value);
  const onPowderChange = (event) => setPowderCount(event.target.value);
  const onTriggerChange = (event) =>
    setUnstableTriggerCount(event.target.value);

  const sapperCraftsWithTriggers = (
    numMageweave: number,
    numPowder: number,
    numTriggers: number
  ): number => Math.floor(Math.min(numTriggers, numMageweave, numPowder / 3));

  const sapperCraftsWithRawMats = (
    numMageweave: number,
    numPowder: number,
    numMithril: number
  ): number =>
    Math.floor(Math.min(numMageweave / 2, numPowder / 4, numMithril));

  const calculateNumberOfSapperCrafts = () => {
    const craftsWithCurrentTriggers = sapperCraftsWithTriggers(
      mageweaveCount,
      powderCount,
      unstableTriggerCount
    );

    const leftoverMageweave = mageweaveCount - craftsWithCurrentTriggers;
    const leftoverMithril = mithrilCount;
    const leftoverPowder = powderCount - craftsWithCurrentTriggers * 3;

    // AKA how many triggers you need to craft for optimal number of sappers
    const craftsFromLeftovers = sapperCraftsWithRawMats(
      leftoverMageweave,
      leftoverPowder,
      leftoverMithril
    );

    setSapperCount(craftsFromLeftovers + craftsWithCurrentTriggers);
  };

  useEffect(() => calculateNumberOfSapperCrafts(), [
    unstableTriggerCount,
    mageweaveCount,
    mithrilCount,
    powderCount,
  ]);

  return (
    <>
      <span>
        <i>Disclaimer</i>: Does account for materials used by both parts and
        craftables.
      </span>
      <h1>Raw Materials</h1>
      <div>
        <img
          src={mageweaveCloth}
          alt="Mageweave Cloth"
          title="Mageweave Cloth"
        />
        <label htmlFor="mageweave-cloth">Count</label>
        <input
          id="mageweave-cloth"
          type="number"
          value={mageweaveCount}
          onChange={onMageweaveChange}
        />
      </div>
      <div>
        <img src={mithrilBar} alt="Mithril Bar" title="Mithril Bar" />
        <label htmlFor="mithril-bar">Count</label>
        <input
          id="mithril-bar"
          type="number"
          value={mithrilCount}
          onChange={onMithrilChange}
        />
      </div>
      <div>
        <img
          src={solidBlastingPowder}
          alt="Solid Blasting Powder"
          title="Solid Blasting Powder"
        />
        <label htmlFor="solid-blasting-powder">Count</label>
        <input
          id="solid-blasting-powder"
          type="number"
          value={powderCount}
          onChange={onPowderChange}
        />
      </div>
      <h1>Parts</h1>
      <div>
        <img
          src={unstableTrigger}
          alt="Unstable Trigger"
          title="Unstable Trigger"
        />
        <label htmlFor="unstable-trigger">Count</label>
        <input
          id="unstable-trigger"
          type="number"
          value={unstableTriggerCount}
          onChange={onTriggerChange}
        />
      </div>
      <h1>Craftables</h1>
      <div id="sapper-container">
        <img
          src={goblinSapperCharge}
          alt="Goblin Sapper Charge"
          title="Goblin Sapper Charge"
        />
        <label htmlFor="sapper">Count</label>
        <input id="sapper" type="number" value={sapperCount} />
      </div>
    </>
  );
};

export default App;
