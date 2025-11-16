import { useEffect, useState } from "react";
import "./FetchApi.css";

export default function IntegrateJsonApi() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async() => {
        const url = "http://localhost:3000/users";
        let res = await fetch(url);
        res = await res.json();
        setUserData(res);
        setLoading(false);
    };

    return (
        <>
            <h1>Integrate JSON Server API and Loader</h1>
            {
                !loading?
                userData.map((user) => (
                  <ul className="user-list" key={user.age}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.email}</li>
                  </ul>
                ))
                :<h4>Data Loading.....</h4>
            }
            
        </>
    );
};