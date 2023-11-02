import "./reset.css";
import "./App.css";
import Sections from "./Component/Sections/Sections";
import ServicesProvided from "./Component/ServicesProvided/ServicesProvided";
import Testimony from "./Component/Testimonies/Testimonies";
import Contacts from "./Component/Contacts/Contacts";
import ScrollButton from "./Component/ScrollButton/ScrollButton";

function App() {
  return (
    <div className="App">
      <Sections />
      <ServicesProvided />
      <Testimony />
      <Contacts />
      <ScrollButton />
    </div>
  );
}

export default App;
