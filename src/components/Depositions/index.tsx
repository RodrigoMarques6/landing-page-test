import React, { useEffect, useState } from "react";
import "./styles.css";

export function Depositions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const itemCount = 5;

  return (
    <section className="section-depositions">
      <div>
        <h1 id="h1-depositions">
          Alguns<span id="span-depositions">Depoimentos</span>.
        </h1>
      </div>
      <div id="div-depositions">
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...Array(itemCount)].map((_, index) => (
              <div key={index} className="carousel-item">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
