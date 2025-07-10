import { use } from "react"
import cities from "../../../../lib/data"
import { Iceberg } from "next/font/google";
import City from "@/components/Cities/City";

export default function CityPage({params}) {
    const {id} = use(params)
    // just "==" to avoid type mismatch
    const city = cities.find(item => item.id == id || item.slug == id)
    console.log('⭐️',city);
    
    
    return (
        <>
        <h1>{city.name}</h1>
        <City city={city}/>
        </>
    )
}