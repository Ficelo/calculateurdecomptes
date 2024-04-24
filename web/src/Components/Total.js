import React from "react";
import { useAppContext } from "./AppContext";
import CopyToClipboard from "./CopyToClipboard";
import "./Total.css";

const categories = {
  "Shopping et services": "🛍️",
  Alimentation: "🧀",
  "Logement - maison": "🏠",
  "Education et famille": "👨‍🏫",
  "Banque et assurances": "💵",
  "Loisirs et vacances": "🎮",
  "Revenus et rentrees d'argent": "💰",
};

function Total() {
  const { csvData } = useAppContext();

  var categoryTotal = {};
  csvData.forEach((item) => {
    const category = item["Categorie"];
    var montant = item["Debit"] || item["Credit"] || "0";
    montant = montant.split(",").join(".");
    if (!categoryTotal[category]) {
      categoryTotal[category] = 0;
    }
    if (item.active === true) {
      categoryTotal[category] += parseInt(montant);
    }

  });

  return (
    <div className="total-wrapper">
      <div className="total">
        <CopyToClipboard
          text={
            "LOYER ET CHARGES: " +
            Math.sqrt(categoryTotal["Logement - maison"] ** 2) +
            " €\nBOUFFE : " +
            Math.sqrt(categoryTotal["Alimentation"] ** 2) +
            " €\nAUTRES : " +
            Math.sqrt(
              (categoryTotal["Banque et assurances"] +
                categoryTotal["Shopping et services"]) **
                2,
            ) +
            " €\nCAF : " +
            categoryTotal["Revenus et rentrees d'argent"] +
            " €"
          }
        />
        {Object.keys(categories).map((category) => (
          <p key={category}>
            {categories[category]} {category} :{" "}
            {Math.sqrt(categoryTotal[category] ** 2) || 0} €
          </p>
        ))}
      </div>
    </div>
  );
}

export default Total;
