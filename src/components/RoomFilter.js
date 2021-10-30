import React, { useContext, useEffect } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

const RoomFilter = () => {
  const context = useContext(RoomContext);
  //   console.log(context);
  const {
    filter,
    maxPrice,

    type,
    setType,
    price,
    setPrice,

    capacity,
    setCapacity,

    filterHandler,
    capacityHandler,

    setSortedRooms,
  } = context;

  console.log(filter);
  //   if (rooms.length !== 0) {
  //     let newMaxPrice = Math.max(...rooms.map((item) => item.price));
  //     let newMaxSize = Math.max(...rooms.map((item) => item.size));
  //     // setPrice(newMaxPrice);
  //     setMaxPrice(newMaxPrice);
  //     setMaxSize(newMaxSize);
  //     setMaxSize(newMaxSize);
  //   }

  //   useEffect(() => {
  //     console.log(filter);
  //     if (filter.length !== 0) {
  //       let newMaxPrice = Math.max(...rooms.map((item) => item.price));

  //       setPrice(newMaxPrice);
  //       console.log(newMaxPrice);
  //     }
  //   }, [filter]);

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleCapacity = (e) => {
    setCapacity(e.target.value);
  };

  // console.log(capacity);

  useEffect(() => {
    // console.log(type);
    filterHandler(type);
  }, [type]);

  useEffect(() => {
    capacityHandler(capacity);
  }, [capacity]);

  useEffect(() => {
    if (typeof price === "number") {
      const oldFilteredRooms = [...filter];
      // setSortedRooms(oldFilteredRooms)
      const priceFilter = oldFilteredRooms.filter(
        (item) => item.price <= price
      );
      setSortedRooms(priceFilter);
      // setFilter(priceFilter);
    } else {
      const number = parseInt(price);
      // console.log(number);
      const oldFilteredRooms = [...filter];
      const priceFilter = oldFilteredRooms.filter(
        (item) => item.price <= number
      );
      console.log(oldFilteredRooms);
      setSortedRooms(priceFilter);
      // setFilter(priceFilter);
    }
  }, [price]);

  const handlePrice = (e) => {
    // console.log(e.target.value);
    setPrice(e.target.value);
  };
  // console.log(price);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label>room type</label>
          <select className="form-control" onChange={handleChange}>
            <option selected value="all">all</option>
            <option value="single">single</option>
            <option value="family">family</option>
            <option value="double">double</option>
            <option value="presidential">presidential</option>
          </select>
        </div>
        <div className="form-group">
          <label>room capacity</label>
          <select className="form-control" onChange={handleCapacity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="form-group">
          <label>room price {price}</label>
          <input
            type="range"
            className="form-control"
            min={0}
            max={maxPrice}
            value={price}
            onChange={handlePrice}
          />
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
