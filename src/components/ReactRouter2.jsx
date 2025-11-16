import Navbar from "./Navbar";
import { Navigate, Route, Routes } from 'react-router';
import User from "./User";
import UseFormState from "./UseFormState";
import UseId from "./UseId";
import UseRef from "./UseRef";
import UseTransition from "./UseTransition";
import Counter from "./Counter";
import NestedRouter from "./NestedRouter";
import Student from "./NestedRouterComponent/Student";
import Department from "./NestedRouterComponent/Department";
import College from "./NestedRouterComponent/College";
//import PageNotFound from "./PageNotFound";
// import Props from "./Props";
//import PropsObj from "./PropsObj";
// import Clock from "./Clock";
// import Controler from "./Controler";
// import CustomHook from "./CustomHook";
// import CustomToggle from "./CustomToggle";


export default function ReactRouter2() {
    return (
        <>            
            <Routes>
                <Route element={<Navbar />}>
                    <Route path='/' element={<User />}></Route>
                    <Route path='/counter' element={<Counter />}></Route>
                    <Route path='/useFormState' element={<UseFormState />}></Route>
                    <Route path='/useid' element={<UseId />}></Route>
                    <Route path='/useRef' element={<UseRef />}></Route>
                    <Route path='/useTransition' element={<UseTransition />}></Route>
                </Route>

                {/* Nested Route */}
                <Route path='/nestedRouter' element={<NestedRouter />}>
                    <Route path='student' element={<Student />}></Route>
                    <Route path='department' element={<Department />}></Route>
                    <Route path='college' element={<College />}></Route>
                </Route>

                {/* 404 Error page with route*/}
                {/* <Route path='/*' element={<PageNotFound />}/> */}
                {/* <Route path='/*' element={<Navigate to='/'/>} /> */}

                {/* Other Pending Route */}
                 {/* <Route path='/props' element={<Props />}></Route> */}
                {/*<Route path='/propsObj' element={<PropsObj />}></Route>
                <Route path='/clock' element={<Clock />}></Route>
                <Route path='/controler' element={<Controler />}></Route>
                <Route path='/customHook' element={<CustomHook />}></Route>
                <Route path='/customToggle' element={<CustomToggle />}></Route> */}
            </Routes>
        </>
    )
}

//import this file in App.jsx