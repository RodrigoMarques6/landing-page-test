import React from "react";
import "./styles.css";

export function Header() {
  return (
    <section className="container-header">
      <p className="logo">LOGO</p>
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
              <span>Cursos</span>
            </a>
          </li>
          <li>
            <a>
              <span>Depoimentos</span>
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
