import React from "react";

import ImgHero from "assets/images/img-hero.jpg";
import ImgHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

export default function Hero(props) {
  const showFav = () => {
    window.scrollTo({
      top: props.refFav.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 550 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Good Food is <br />A{" "}
            <span className="text-primary">Good Mood.</span>
          </h1>
          <p className="font-weight-light mb-5 text-gray-600 w-75">
            Food is the ingredient that bind us together! And nothing brings
            people together like Good Food!
          </p>
          <Button
            className="btn px-5 text-white"
            isPrimary
            hasShadow
            onClick={showFav}
          >
            I'm Hungry
          </Button>
        </div>
        <div className="col-6 pl5">
          <div style={{ width: 500, height: 400 }}>
            <img
              src={ImgHero}
              alt="strawberry cake"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImgHero_}
              alt="strawberry cake"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
