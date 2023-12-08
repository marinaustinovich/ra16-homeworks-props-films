import "./App.css";
import { FilmsRating } from "./components";
import { films } from "./data/films";



const App = () => <FilmsRating films={films}/>;

export default App;
