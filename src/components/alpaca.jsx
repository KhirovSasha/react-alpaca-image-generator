import React, { useState, useEffect } from "react";
import AlpacaArt from "./AlpacaArt";
import { alpacaConfig } from "../utils/alpacaConfig";
import { getImage } from "../utils/getImage";

const Alpaca = () => {
  const [config, setConfig] = useState(alpacaConfig);
  const [bg, setBg] = useState(null);
  const [neck, setNeck] = useState(null);
  const [nose, setNose] = useState(null);
  const [mouth, setMouth] = useState(null);
  const [eyes, setEyes] = useState(null);
  const [hair, setHair] = useState(null);
  const [leg, setLeg] = useState(null);
  const [ears, setEars] = useState(null);
  const [accessories, setAccessories] = useState(null);

  const changeImage = (feature, attribute) => {
    const { directory: dir } = feature;
    const { filename: bgImage } = attribute;

    const configClone = [...config];
    const selectedFeatureIndex = configClone.indexOf(feature);
    const selectedAttrIndex =
      configClone[selectedFeatureIndex].items.indexOf(attribute);

    configClone[selectedFeatureIndex].items.forEach(
      (attr) => (attr.selected = false)
    );
    configClone[selectedFeatureIndex].items[selectedAttrIndex].selected = true;

    setConfig(configClone);

    getImage(dir, bgImage, (image) => {
      switch (dir) {
        case "backgrounds":
          setBg(image);
          break;
        case "neck":
          setNeck(image);
          break;
        case "nose":
          setNose(image);
          break;
        case "eyes":
          setEyes(image);
          break;
        case "ears":
          setEars(image);
          break;
        case "mouth":
          setMouth(image);
          break;
        case "leg":
          setLeg(image);
          break;
        case "hair":
          setHair(image);
          break;
        case "accessories":
          setAccessories(image);
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    const renderAlpaca = () => {
      config.forEach((feature) => {
        const attribute = feature.items.filter(
          (at) => at.filename === "default"
        )[0];
        changeImage(feature, attribute);
      });
    };
    renderAlpaca();
  }, []);

  const alpacaAttr = {
    bg,
    neck,
    nose,
    mouth,
    eyes,
    hair,
    leg,
    ears,
    accessories,
  };

  return (
    <div className="generator">
      <h1>ALPACA GENERATOR</h1>
      
      <div className="panel">
        <AlpacaArt attr={alpacaAttr} />
      </div>
      <div className="panel">1</div>
    </div>
  );
};

export default Alpaca;
