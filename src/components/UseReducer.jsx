import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  adress: "",
};

const reducer = (data, action) => {
 return {...data,[action.type]:action.val}
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <>
      <h1>useReducer</h1>
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        placeholder="enter name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        placeholder="enter password"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        placeholder="enter email"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        placeholder="enter city"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "adress" })
        }
        placeholder="enter adress"
      />
      <br />
      <br />

        <ul>
            <li>Name: {state.name}</li>
            <li>Password: {state.password}</li>
            <li>Email: {state.email}</li>
            <li>City: {state.city}</li>
            <li>Adress: {state.adress}</li>
        </ul>

      <button>Add details</button>
    </>
  );
}

export default UseReducer;
