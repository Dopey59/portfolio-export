import React from "react";
import { Carousel } from "react-responsive-carousel";
import { items } from "../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

    export default function ResponsiveCarousel() {
      const { responsive } = items;
      return (
        <main id="pro">
          <div className="title flex justify-center sm:justify-start mx-4">
            <h1 className="font-bold sm:text-2xl text-xl hover:border-b-4 border-purple-500 ">Expériences Pro & Formations <FontAwesomeIcon icon={faArrowDown} size="sm" bounce /></h1>
          </div>
          <br></br>
          <div>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              dynamicHeight={false}
              showIndicators={false}
              showStatus={false}
              className="bg-gradient-to-r from-gray-900 to-purple-900 text-white shadow-xl rounded-xl"
              
            >
              {responsive.map((item) => (
                <div className="" key={item.id}>
                  <div className="p-4">
                  </div>
                  <div className="p-12">
                    <h2 className="font-bold text-2xl sm:text-lg ">{item.title}</h2>
                    <h2 className="text-lg">{item.date}</h2>

                    <br></br>
                    <p className="text-lg font-bold sm:text-xl">{item.text}</p>
                    <br></br><br></br>
                    <p className="text-sm sm:text-xl">{item.Description}</p>
                    <br></br><br></br>
                    <p className="text-sm sm:text-xl font-bold">{item.Compétences}</p>


                  </div>
                </div>
              ))}
            </Carousel>
          </div>

        </main>
      );
    }