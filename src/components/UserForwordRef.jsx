//old method of forword ref 

// import { forwardRef } from "react";

// const UserForwordRef = (props,ref) => {
//     return (
//         <>
//         <input type="text" ref={ref}/>
//         </>
//     )
// };
// export default forwardRef(UserForwordRef);

const UserForwordRef = (props) => {
    return (
        <>
            <input type="text" ref={props.ref}/>
        </>
    )
}

export default UserForwordRef;