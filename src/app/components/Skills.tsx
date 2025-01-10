import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaAngular, FaShopify, FaWordpress,
  FaVuejs, FaHtml5, FaCss3, FaSass, FaFigma, FaPhp, FaDocker,
  FaPython, FaNode, FaRedhat, FaJenkins, FaAws, FaLaravel
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript, SiExpress, SiRedux, SiJavascript,
  SiAdobephotoshop, SiDatadog, SiPostman, SiPostgresql,
  SiMysql, SiApache, SiNestjs, SiRubyonrails
} from "react-icons/si";

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
        Technologies I Use
      </h3>

      <h3 className="absolute top-36 w-[70%] text-center pt-4 pb-14 uppercase tracking-[3px] text-gray-500 text-sm">
        I specialize in a diverse range of modern technologies that empower me to build scalable, efficient, and dynamic web applications. From front-end frameworks to back-end development and everything in between.
      </h3>

      <div className="carousel-wrapper flex w-[80%] sm:w-[90%] md:w-[70%] text-center pt-14 mx-auto ">
        <div className=" w-[80%] sm:w-[90%] md:w-[70%] overflow-hidden bg-[#e7deff] mx-auto rounded-[15px]">
          <div className="carousel-block ">
            <div className="carousel-inner carousel-left flex">
              <span className="flex">
                <div className="carousel-item">
                  <FaReact className="h-12 w-12 sm:h-16 sm:w-16 text-[#58c4dc]" />
                </div>
                <div className="carousel-item">
                  <RiNextjsFill className="h-12 w-12 sm:h-16 sm:w-16 text-black-500" />
                </div>
                <div className="carousel-item">
                  <FaAngular className="h-12 w-12 sm:h-16 sm:w-16 text-[#ff00ff]" />
                </div>
                <div className="carousel-item">
                  <SiTypescript className="h-12 w-12 sm:h-16 sm:w-16 text-[#3078c6]" />
                </div>
                <div className="carousel-item">
                  <SiRedux className="h-12 w-12 sm:h-16 sm:w-16 text-[#764abc]" />
                </div>
              </span>
              <span className="flex">
                <div className="carousel-item">
                  <FaShopify className="h-12 w-12 sm:h-16 sm:w-16 text-[#5e8e3e]" />
                </div>
                <div className="carousel-item">
                  <FaWordpress className="h-12 w-12 sm:h-16 sm:w-16 text-[#0f66bc]" />
                </div>
                <div className="carousel-item">
                  <FaVuejs className="h-12 w-12 sm:h-16 sm:w-16 text-[#42b883]" />
                </div>
                <div className="carousel-item">
                  <FaHtml5 className="h-12 w-12 sm:h-16 sm:w-16 text-[#e77232]" />
                </div>
                <div className="carousel-item">
                  <FaCss3 className="h-12 w-12 sm:h-16 sm:w-16 text-[#e7deff]" />
                </div>
              </span>
              <span className="flex space-x-4">
                <div className="carousel-item">
                  <SiDatadog className="h-12 w-12 sm:h-16 sm:w-16 text-[#2a0034]" />
                </div>
                <div className="carousel-item">
                  <SiPostman className="h-12 w-12 sm:h-16 sm:w-16 text-[#ff6c37]" />
                </div>
                <div className="carousel-item">
                  <SiPostgresql className="h-12 w-12 sm:h-16 sm:w-16 text-[#30648f] bg-white" />
                </div>
                <div className="carousel-item">
                  <SiMysql className="h-12 w-12 sm:h-16 sm:w-16 text-[#02758f] bg-white" />
                </div>
                <div className="carousel-item">
                  <SiApache className="h-12 w-12 sm:h-16 sm:w-16 text-[#ca2136] bg-white" />
                </div>
              </span>
            </div>
          </div>

          <div className="carousel-block">
            <div className="carousel-inner carousel-right flex space-x-4">
              <span className="flex space-x-4">
                <div className="carousel-item">
                  <SiJavascript className="h-12 w-12 sm:h-16 sm:w-16 text-[#000]" />
                </div>
                <div className="carousel-item">
                  <FaSass className="h-12 w-12 sm:h-16 sm:w-16 text-[#cf649a]" />
                </div>
                <div className="carousel-item">
                  <FaFigma className="h-12 w-12 sm:h-16 sm:w-16 text-[#ff00ff]" />
                </div>
                <div className="carousel-item">
                  <SiAdobephotoshop className="h-12 w-12 sm:h-16 sm:w-16 text-[#31a8ff]" />
                </div>
                <div className="carousel-item">
                  <FaPhp className="h-12 w-12 sm:h-16 sm:w-16 text-white bg-[#4f5b93]" />
                </div>
              </span>
              <span className="flex space-x-4">
                <div className="carousel-item">
                  <FaPython className="h-12 w-12 sm:h-16 sm:w-16 text-[#ffdb50]" />
                </div>
                <div className="carousel-item">
                  <FaNode className="h-12 w-12 sm:h-16 sm:w-16 text-white bg-[#4f9d43]" />
                </div>
                <div className="carousel-item">
                  <FaRedhat className="h-12 w-12 sm:h-16 sm:w-16 text-[#ee0000]" />
                </div>
                <div className="carousel-item">
                  <FaJenkins className="h-12 w-12 sm:h-16 sm:w-16 text-[#d43833]" />
                </div>
                <div className="carousel-item">
                  <SiExpress className="h-12 w-12 sm:h-16 sm:w-16" />
                </div>
              </span>
              <span className="flex space-x-4">
                <div className="carousel-item">
                  <SiNestjs className="h-12 w-12 sm:h-16 sm:w-16 text-[#ea2760] bg-black" />
                </div>
                <div className="carousel-item">
                  <FaAws className="h-12 w-12 sm:h-16 sm:w-16 bg-[#131f2e] text-white" />
                </div>
                <div className="carousel-item">
                  <SiRubyonrails className="h-12 w-12 sm:h-16 sm:w-16 text-white bg-[#d30002]" />
                </div>
                <div className="carousel-item">
                  <FaLaravel className="h-12 w-12 sm:h-16 sm:w-16 text-[#ff2c20] bg-[#fff3f2]" />
                </div>
                <div className="carousel-item">
                  <FaLaravel className="h-12 w-12 sm:h-16 sm:w-16 text-[##1c63ed] bg-white" />
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
