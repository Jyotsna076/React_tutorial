import { Suspense, use } from "react";

const fetchData = () => fetch('https://dummyjson.com/users').then((response) => response.json());

const userResource = fetchData();

export default function UseApi() {
    return (
        <>
            <h1>use API in react JS</h1>
            <Suspense fallback={<p>Loading.....</p>}>
                <UserList userResource={userResource}/>
            </Suspense>
        </>
    )
}

// useApi is API not hook.

const UserList = ({userResource}) => {
    const userData = use(userResource)
    console.log(userData);
    
    
    return (
        <>
            <h1>User List</h1>
            {
                userData?.users?.map((user) => (
                    <h1>{user.firstName}</h1>
                ))
            }
        </>
    )
}