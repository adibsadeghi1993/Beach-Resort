import React, { useEffect, useState } from "react";
import items from "./data";

export const RoomContext = React.createContext();

const Context = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortedRooms, setSortedRooms] = useState(filter);
  const [FeaturedRooms, setFeaturedRooms] = useState([]);
  const [maxPrice,setMaxPrice]=useState(0)
  const [maxSize,setMaxSize]=useState(0)

  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    const Rooms = formatData(items);
    console.log(Rooms)

    setRooms(Rooms);
    setFilter(Rooms);

    const FeaturedRooms = Rooms.filter((x) => x.featured === true);
    setFeaturedRooms(FeaturedRooms);
    setSortedRooms(Rooms);
  }, []);

  const getRoom = (slug) => {
    const tempRooms = [...rooms];
    const Room = tempRooms.find((room) => room.slug === slug);
    return Room;
  };

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images, id };
      return room;
    });
    console.log(tempItems)
    return tempItems;
  };

  const filterHandler = (type) => {
    console.log(rooms);
    const newRooms = [...rooms];
    if (type === "all") {
      setFilter(newRooms);
      // setSortedRooms(newRooms)
    } else {
      const filteredRooms = newRooms.filter((item) => item.type === type);
      setFilter(filteredRooms);
      // setSortedRooms(newRooms)
    }
  };

  useEffect(() => {
    const sortRooms = [...filter];
    setSortedRooms(sortRooms);
  }, [filter]);

  const capacityHandler = (cap) => {
    const filterRoom = [...filter];
    const capacityFilteredRoom = filterRoom.filter(
      (item) => item.capacity === cap
    );
    setFilter(capacityFilteredRoom);
    console.log(capacityFilteredRoom);
  };

  const priceFiltere = (price) => {
    console.log(price);
  };

  useEffect(() => {
    if (rooms.length !== 0) {
      let newMaxPrice = Math.max(...rooms.map((item) => item.price));
      let newMaxSize = Math.max(...rooms.map((item) => item.size));
      setPrice(newMaxPrice);
      setMaxPrice(newMaxPrice);
      setMaxSize(newMaxSize);
      setMaxSize(newMaxSize);
    }
  }, [rooms]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        capacityHandler,
        filterHandler,
        filter,
        setRooms,
        sortedRooms,
        FeaturedRooms,
        maxPrice,
        maxSize,

        getRoom,
        type,
        setType,
        price,
        setPrice,

        capacity,
        setCapacity,
        priceFiltere,
        setFilter,
        setSortedRooms,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default Context;
