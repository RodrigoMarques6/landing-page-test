import React from "react";
import "./styles.css";

export function Courses() {
  return (
    <section className="section-sobreMim">
      <div>
        <h1 id="h1-do-sobreMim">
          Nossos<span id="span-do-sobreMim">Cursos</span>.
        </h1>
      </div>
      <div id="div-do-sobreMim">
        <div className="div1-sobre">
          <h2>
            Transforme suas <span id="span-do-sobreMim">finanças</span> e
            potencialize seus <span id="span-do-sobreMim">investimentos</span>.
          </h2>
          <br />
          <p>
            Explore nossas imersões do Mercado Financeiro <br />e consiga
            rentabilidades que vão além das expectativas, <br />
            garantindo um futuro financeiro próspero!
          </p>
        </div>
        <div className="div2-sobre">
          <div className="courses-flex">
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Finanças para Todos:</b>
                </span>
                <br /> Ponto de partida ideal para sua jornada no mundo dos
                investimentos
              </p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Renda Fixa Descomplicada:</b>
                </span>
                <br /> Dominando CDB, LCI e LCA e como a marcação a mercado age sobre eles
              </p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Investindo em Fundos Imobiliários:</b>
                </span>
                <br /> Estratégias para ganhos a longo prazo
              </p>
            </div>
          </div>
          <div className="courses-flex">
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Dominando a B3:</b>
                </span>
                <br /> Obtenha confiança enquanto multiplica seu patrimônio em
                ações brasileiras
              </p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Mercado de Ações dos EUA:</b>
                </span>
                <br /> Invista na economia mais sólida do mundo
              </p>
            </div>
            <div className="edit-courses">
              <p>
                <span id="span-do-sobreMim">
                  <b>Gestão de Carteiras Eficiente:</b>
                </span>
                <br /> Obtenha fluxos de controle para a sua carteira de
                investimentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
