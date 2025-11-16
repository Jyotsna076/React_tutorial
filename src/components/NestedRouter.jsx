import { Link, NavLink, Outlet } from "react-router";
import "./Navbar.css"

export default function NestedRouter() {
    return (
        <div className="college" style={{textAlign: 'center'}}>
            <h1>Nested Router Page</h1>
            <h1><Link to="/">Go Back</Link></h1>
            <NavLink className="link" to='student'>Student</NavLink>
            <NavLink className="link" to='department'>Department</NavLink>
            <NavLink className="link" to='college'>College Details</NavLink>
            <Outlet />
        </div>
    )
}