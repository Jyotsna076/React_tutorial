import { NavLink, Outlet } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink style={{color: '#551a8b'}} className="link" to="/">
            <h2>Logo</h2>
          </NavLink>
        </div>

        <div>
          <ul>
            <li>
              <NavLink to="/" className="link">
                User
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter" className="link">
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/useFormState" className="link">
                UseFormState
              </NavLink>
            </li>
            <li>
              <NavLink to="/useid" className="link">
                UseId
              </NavLink>
            </li>
            <li>
              <NavLink to="/useRef" className="link">
                UseRef
              </NavLink>
            </li>
            <li>
              <NavLink to="/useTransition" className="link">
                UseTransition
              </NavLink>
            </li>
            <li>
              <NavLink to="/nestedRouter" className="link">
                NestedRouter
              </NavLink>
            </li>
            {/*<li>
                        <NavLink to='/propsObj' className="link">PropsObj</NavLink>
                    </li>
                    <li>
                        <NavLink to='/clock' className="link">Clock</NavLink>
                    </li>
                    <li>
                        <NavLink to='/controler' className="link">Controler</NavLink>
                    </li>
                    <li>
                        <NavLink to='/customHook' className="link">CustomHook</NavLink>
                    </li>
                    <li>
                        <NavLink to='/customToggle' className="link">CustomToggle</NavLink>
                    </li>*/}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
