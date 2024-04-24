import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import "./ListItem.css";

const categories = {
  "Shopping et services": "🛍️",
  Alimentation: "🧀",
  "Logement - maison": "🏠",
  "Education et famille": "👨‍🏫",
  "Banque et assurances": "💵",
  "Loisirs et vacances": "🎮",
  "Revenus et rentrees d'argent": "💰",
};

const ListItem = ({ id, texte, category, montant, date, active }) => {
  const { csvData, setCsvData } = useAppContext();
  const [isChecked, setIsChecked] = useState(active);

  const handleCheckboxClick = () => {
    const updatedCsvData = csvData.map((item) => {
      if (item["id"] == id) {
        return { ...item, active: !isChecked };
      }
      return item;
    });
    console.log("updated csv data :");
    console.log(updatedCsvData);

    setCsvData(updatedCsvData);
    setIsChecked(!isChecked);
  };

  return (
    <div className="item-wrapper">
      <div>
        <p id="category-texte">
          {categories[category]} {texte}
        </p>
        <div className="montant-date">
          <p id="date">{date}</p>
          <p id="montant">{montant} €</p>
        </div>
      </div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxClick}
      />
    </div>
  );
};

export default ListItem;
