import "./App.css";
import { AppProvider } from "./Components/AppContext";
import List from "./Components/List";
import DragAndDrop from "./Components/DragAndDrop";
import Total from "./Components/Total";
import Statistiques from "./Components/Statistiques";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div class="drag-and-drop-wrapper">
          <div class="drag-and-drop">
            <div class="drag-and-drop-image">
              <DragAndDrop />
            </div>
          </div>
        </div>
        <div class="resultat-wrapper">
          <div class="resultat">
            <Total />
          </div>
        </div>
        <div class="statistiques-wrapper">
          <div class="statistiques"></div>
        </div>
        <div class="liste-wrapper">
          <List class="liste" />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
