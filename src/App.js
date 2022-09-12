import "./App.css";
import { useState } from "react";
import SearchPage from "./components/SearchPage"
import BooksList from "./components/BooksList"
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BooksList />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
