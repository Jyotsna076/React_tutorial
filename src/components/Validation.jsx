import { useActionState } from "react";

function Validation() {
  const handleLogin = (preData, FormData) => {
    let name = FormData.get("name");
    let password = FormData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error: "Name should not container more then 5 character",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "Password can contain only number and alphabet",
        name,
        password,
      };
    } else {
      return { message: "Login success", name, password };
    }

    //console.log(name,password);
  };

  const [data, action, pending] = useActionState(handleLogin);

  return (
    <>
      <h1>Validation with useActionState in React</h1>
      {data?.message && (
        <span style={{ color: "green", fontWeight: "bold" }}>
          {data?.message}
        </span>
      )}
      {data?.error && (
        <span style={{ color: "red", fontWeight: "bold" }}>{data?.error}</span>
      )}
      <form action={action}>
        <input
          type="text"
          name="name"
          defaultValue={data?.name}
          placeholder="Enter user name"
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          defaultValue={data?.password}
          placeholder="Enter password"
        />
        <br />
        <br />
        <button disabled={data?.error}>Login</button>
      </form>
    </>
  );
}

export default Validation;
