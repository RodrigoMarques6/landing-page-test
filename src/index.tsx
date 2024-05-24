import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home2 } from "./components/Home";
import { Courses } from "./components/Courses";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Home2 />
        <Courses />
      </section>
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
