import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];

  return (
    rooms.map((item)=>{
      return <div style={{margin:20}}> 
         <li key={item.room_type}>{item.room_type},{item.vacant_rooms},{item.price}</li>
      </div>
     
    })
    
  )
}
