import {useFormStatus} from 'react-dom'

function UseFormState() {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
  };

  function CustomerForm() {

    const {pending} = useFormStatus()
    
    return (
      <>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <button disabled={pending} >{pending? 'Submitting...' : 'Submit'}</button>
      </>
    );
  }

  return (
    <>
      <h1>UseForm Status</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}

export default UseFormState;
