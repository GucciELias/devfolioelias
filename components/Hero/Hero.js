import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { gsap, Linear } from "gsap";
import {MENULINKS, TYPED_STRINGS, CV_LINK, TABLE_LINK} from "../../constants";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";

// import lottie from "lottie-web";

const Hero = () => {
  const [lottie, setLottie] = useState();

  const typedEl = useRef(null);
  const targetSection = useRef(null);
  const lottieRef = useRef(null);

  const options = {
    strings: TYPED_STRINGS,
    typeSpeed: 50,
    startDelay: 1500,
    backSpeed: 50,
    backDelay: 8000,
    loop: true,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const typed = new Typed(typedEl.current, options);

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
        .to(targetSection.current, { opacity: 1, duration: 2 })
        .from(
            targetSection.current.querySelectorAll(".seq"),
            { opacity: 0, duration: 0.5, stagger: 0.5 },
            "<"
        );

    return () => typed.destroy();
  }, [typedEl, targetSection]);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: lottieRef.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("../../public/lottie/lottie.json"),
  //   });
  // }, []);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
      <section
          ref={targetSection}
          className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
          id={MENULINKS[0].ref}
          style={{ opacity: 0 }}
      >
        <style global jsx>
          {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
        </style>
        <div className="flex flex-col pt-40 md:pt-0 select-none">
          <h5
              className={`${styles.intro} font-mono font-medium text-indigo-light seq`}
          >
            Bonjour, je m&apos;appelle
          </h5>
          <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
            <span className={`relative ${styles.emphasize} seq`}>Elias</span>
            <span className="seq"> Huc</span>
          </h1>
          <p>
          <span
              ref={typedEl}
              className="seq text-3xl text-gray-light-3 font-mono leading-relaxed"
          ></span>
          </p>
          <div className="seq">
            <Profiles />
          </div>
          <div className="seq pt-4">
            <Button href={CV_LINK} download classes="link" type="primary">
              Mon CV
            </Button>
            <Button href={TABLE_LINK} download classes="link" type="primary">
              Tableau de compétence
            </Button>
          </div>

        </div>
        <div
            className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
            ref={lottieRef}
        ></div>
      </section>
  );
};

export default Hero;
