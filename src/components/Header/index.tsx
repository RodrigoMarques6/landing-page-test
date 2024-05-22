import React from "react";
import "./styles.css";

export function Header() {
  return (
    

    <section className="container-header" style={{ position: "fixed" }}>
      <div className="mobile-content"></div>

      <nav className="nav-header">
        <ul>
          <li>
            <a>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a>
              <span>Sobre</span>
            </a>
          </li>

          <li>
            <a>
              <span>Experiência</span>
            </a>
          </li>

          <li>
            <a>
              <span>Projetos</span>
            </a>
          </li>

          <li>
            <a>
              <span>Resume</span>
            </a>
          </li>

          <li>
            <a>
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
