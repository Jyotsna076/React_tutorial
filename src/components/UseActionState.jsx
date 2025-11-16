import { useActionState } from "react";

function UseActionState() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    //console.log('Form Submitted',name,password);
    if (name && password) {
      return { message: "Data Submitted",name,password};
    } else {
      return { error: "Failed to submit Enter Proper Data",name,password};
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <>
      <h1>useActionState Hooks in React js</h1>
      <form action={action}>
        <label htmlFor="name">Name: </label>
        <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name" />
        <br />
        <br />
        <label htmlFor="password">Name: </label>
        <input defaultValue={data?.password} type="password" placeholder="Enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit Data</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </>
  );
}

export default UseActionState;
