import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        const items = carousel.innerHTML;
        carousel.innerHTML += items; // Duplicate for infinite scroll
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="marquee-wrapper flex w-full">
        <div className="container">
          <div className="marquee-block">
            <div className="marquee-inner to-left">
              <span>
                <div className="marquee-item">
                  <p className="">1</p>
                </div>
                <div className="marquee-item">
                  <p className="">2</p>
                </div>
                <div className="marquee-item">
                  <p className="">3</p>
                </div>
                <div className="marquee-item">
                  <p className="">4</p>
                </div>
                <div className="marquee-item">
                  <p className="">5</p>
                </div>
              </span>
              <span>
                <div className="marquee-item">
                  <p className="">1</p>
                </div>
                <div className="marquee-item">
                  <p className="">2</p>
                </div>
                <div className="marquee-item">
                  <p className="">3</p>
                </div>
                <div className="marquee-item">
                  <p className="">4</p>
                </div>
                <div className="marquee-item">
                  <p className="">5</p>
                </div>
              </span>
            </div>
          </div>
          <div className="marquee-block">
            <div className="marquee-inner to-right">
              <span>
                <div className="marquee-item">
                  <p className="">1</p>
                </div>
                <div className="marquee-item">
                  <p className="">2</p>
                </div>
                <div className="marquee-item">
                  <p className="">3</p>
                </div>
                <div className="marquee-item">
                  <p className="">4</p>
                </div>
                <div className="marquee-item">
                  <p className="">5</p>
                </div>
              </span>
              <span>
                <div className="marquee-item">
                  <p className="">1</p>
                </div>
                <div className="marquee-item">
                  <p className="">2</p>
                </div>
                <div className="marquee-item">
                  <p className="">3</p>
                </div>
                <div className="marquee-item">
                  <p className="">4</p>
                </div>
                <div className="marquee-item">
                  <p className="">5</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
