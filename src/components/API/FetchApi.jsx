import { useEffect, useState } from "react";
import './FetchApi.css';

export default function FetchApi() {
    const [userData, setuserData] = useState([])

    useEffect(() => {
        getUsersData();
    }, [])

    async function getUsersData() {
        const url = 'https://dummyjson.com/users'
        let response = await fetch(url);
        response = await response.json();
        setuserData(response.users);
    }
    
    console.log(userData);
    

    return (
        <>
            <h1>Fetch API</h1>
            <ul className="user-list user-list-header">
                <li>Id</li>
                <li>MaidenName</li>
                <li>Age</li>
                <li>Firt Name</li>
                <li>Last Name</li>
            </ul>
           {
            userData && userData.map((user) => (
                <ul className="user-list">
                    <li>{user.id}</li>
                    <li>{user.maidenName}</li>
                    <li>{user.age}</li>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    
                </ul>
            ))
           }
        </>
    )
}