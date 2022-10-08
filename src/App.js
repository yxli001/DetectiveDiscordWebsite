import React from "react";
import "./App.css";
import Home from "./pages/Home/Home.page.js";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
