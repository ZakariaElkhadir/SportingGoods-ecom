import "./App.css";
import NewArrivals from "./NewArrivals/NewArrivals";
import SecCateg from "./Categories/secCateg";
import FirGrid from "./Grid/firGrid";
function App() {
  return (
    <div>
      { <FirGrid /> } 
      { <NewArrivals /> }
      { <SecCateg /> }
    </div>
  );
}
export default App;
