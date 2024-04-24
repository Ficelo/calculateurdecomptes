import ListItem from "./ListItem";
import { useAppContext } from "./AppContext";
import "./List.css";

function List() {
  const { csvData, setCsvData } = useAppContext();

  var a = 0;
  const updatedCsvData = csvData.map((item) => {
    a++;
    item["active"] = true;
    item["id"] = a;
    return item;
  });
  a = 0;

  return (
    <div className="liste">
      {updatedCsvData.map((item) => {
        return (
          <ListItem
            id={item["id"]}
            texte={item["Libelle operation"]}
            date={item["Date operation"]}
            category={item["Categorie"]}
            montant={item["Debit"] || item["Credit"]}
            csvData={csvData}
            active={item.active}
          />
        );
      })}
    </div>
  );
}

export default List;
