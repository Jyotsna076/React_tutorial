import { useState } from "react"

export default function UpdateObj() {
    const [data, setData] = useState({
        name: 'Krishna',
        adress: {
            city: 'Bangalore',
            state: 'Karnataka'
        }
    });

    const handleName = (val) => {
        data.name = val
        setData({...data})
    }
    const handleCity = (city) => {
        data.adress.city = city
        setData({...data, adress: {...data.adress, city: city}})
    }

  return (
    <>
    <h1>Updating Object in state</h1>
    <input type="text" placeholder="Enter Update Name here" onChange={(event) => handleName(event.target.value)}/> 
    <br /><br />
    <input type="text" placeholder="Enter Update City here" onChange={(event) => handleCity(event.target.value)}/>
    <h2>Name: {data.name}</h2>
    <h2>City: {data.adress.city}</h2>
    <h2>State: {data.adress.state}</h2>
    </>
  )
};

