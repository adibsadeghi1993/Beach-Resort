import React from 'react'
import Room from "./Room"

const RoomList = ({rooms}) => {
    if(rooms.length===0){
        return <div className="empty-search">
            <h3>no rooms acording your search </h3>

        </div>
    }
    return (
        <section className="roomslist">
          <div className="roomslist-center">
              {rooms.map((item,index)=>{
                  return <Room  key={index} room={item}/>
              })}

          </div>
        </section>
    )
}

export default RoomList
