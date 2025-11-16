import { useState } from "react";

function UpdateArr() {
    const [data, setData] = useState([
        'Krishna',
        'Riya',
        'Anjali'
    ]);

    const [dataDetails, setDataDetails] = useState([
        { name: 'Sameer', age: 20},
        { name: 'Sara', age: 22},
        { name: 'Ruhani', age: 19}
    ]);

    const handleUser = (name) => {
        data[data.length - 1] = name;  // Update the last element   
        setData([...data]); // Spread operator to create a new array reference

    }
    const handleAge = (age) => {
        dataDetails[dataDetails.length - 1].age = age;  
        setDataDetails([...dataDetails]); 

    }
    
    return(
        <>
          <h1>Update Array in State</h1>
          <input type="text" placeholder="Enter Last user name" onChange={(e) => handleUser(e.target.value)}/>
          {
            data.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))
          }
          <hr />

          <input type="text" placeholder="Enter Last user age" onChange={(e) => handleAge(e.target.value)}/>
          {
            dataDetails.map((item,index) => (
                <h4 key={index}>{item.name}, {item.age}</h4>
            ))
          }
        </>
    )
}

export default UpdateArr;