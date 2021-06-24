import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktailes",
      info: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
    },
    {
        icon: <FaHiking />,
        title: "Endles Hiking",
        info: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing",
      }
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
          {services.map((item,index)=>{
              return <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>

              </article>
          })}

      </div>
    </section>
  );
};

export default Services;
