function Props ({user}) { 

    return(
        <>
        <hr />
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        <hr />
        </>
    )

}

export default Props;