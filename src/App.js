import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import "./styles.css";
//import { BrowserRoute, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./components/Profile ";

export default function App() {
  return (
    <div>
      <Home />
      <SearchBar />
      <Profile />
    </div>
  );
}
