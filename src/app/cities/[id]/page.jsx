import { use } from "react"
import cities from "../../../../lib/data"
import { Iceberg } from "next/font/google";

export default function CityPage({params}) {
    const {id} = use(params)
    const city = cities.find(item => item.id === 1)
    console.log('⭐️',city);
    
    
    return (
        <>
        <h1>Detail {id}</h1>
        </>
    )
}