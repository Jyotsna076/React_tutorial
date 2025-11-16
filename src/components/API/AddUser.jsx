import {Routes, Route, NavLink} from 'react-router'
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import "./FetchApi.css"
import EditUser from './EditUser';

export default function AddUser() {
    

    return (
        <>
            <ul className='nav-list'>
                <li>
                    <NavLink to='/' >User List</NavLink>
                </li>
                <li>
                    <NavLink to='/add'>Add User</NavLink>
                </li>
            </ul>
            {/* <h1>Make Route and Pages for Add User and User List UI.</h1> */}
            <Routes>
                <Route path='/' element={<UserList />}/>
                <Route path='/add' element={<UserAdd />} />
                <Route path='/edit/:id' element={<EditUser />} />
            </Routes>
           
        </>
    );
}

//import this file in app.jsx