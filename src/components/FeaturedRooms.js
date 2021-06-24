import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";

import Title from "./Title";

const FeaturedRooms = () => {
  const context = useContext(RoomContext);
  const { FeaturedRooms: rooms, loading } = context;
  console.log(rooms);
  console.log("featuredromm component")

  return (
    <section className="featured-rooms">
      <Title title="featured rooms " />
      <div className="featured-rooms-center">
        {loading ? <Loading/>:rooms.map((room) => {
         return   <Room  key={room.id} room={room}    />
        })}
      </div>
    </section>
  );
};

export default FeaturedRooms;
