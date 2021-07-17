import React,{useContext,useEffect,useState} from 'react'
import Hero from '../components/Hero'
import { RoomContext } from '../Context'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'




const SingleRoom = (props) => {
    const [data, setData] = useState({})
    const context = useContext(RoomContext)
    const {getRoom}=context
    useEffect(() => {
        
       const detailRoom= getRoom(props.match.params.id)
       setData(detailRoom)
       
    }, [getRoom])
   
    console.log(props)
    console.log(data)
    const {name,description,capacity,size,price,breakfast,pets,images}=data
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>

            </Banner>
          
        </Hero>
        <section  className="single-room">
            <div className="single-room-images">
                {images?.map((item,index)=>{
                    return <img src={item} key={index} alt={name} />
                })}

            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>detailes</h3>
                    <p>{description}</p>

                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size}</h6>
                    <h6>max Capacity : {capacity>1?`${capacity} people`:`${capacity} peson`}</h6>
                    <h6>max Capacity : {pets?`pets allowed `:`pets not allowed`}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>

                </article>

            </div>

        </section>
        
        </>
    )
}

export default SingleRoom

