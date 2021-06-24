import React,{useContext} from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomContext } from '../Context'


const RoomContainer = () => {
    const context = useContext(RoomContext)
    // console.log(context)
    const {loading,sortedRooms,rooms}=context
    return (
        <div>
           
           <RoomFilter rooms={rooms}/>
           <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default RoomContainer
