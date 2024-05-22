import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export default function Home() {
  return (
    <>
      <head></head>

      <Header />

      <section></section>
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}

reportWebVitals();
