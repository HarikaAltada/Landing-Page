import React from "react";
import { watchesList } from "./WatchesList";
import "./Watches.css";
export default function Watches() {
  return (
    <>
      <div id="product" className="product-area pb-80">
        <div className="container">
          <div className="features-content details">
            <div className="price-now">
              <div className="section-title text-center" data-aos="fade-up">
                <h2>Which Watch is Right for You?</h2>
                <p>
                  Delay rapid joy share allow age manor six. Went why far saw
                  many knew. Exquisite excellent son gentleman acuteness her.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="features-content">
            {watchesList.map((watch) => (
              <div className="watch-model">
                <div key={watch.id} className="single-watch-model">
                  <div className="model">
                    <img src={watch.Photoimage} alt={watch.Name} />
                  </div>
                  <div className="model-content">
                    <h2>{watch.Name}</h2>
                    <h4>{watch.rate}&#8377;</h4>
                    <ul>
                      {watch.description.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
