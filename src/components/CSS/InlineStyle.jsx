///INLINE STYLING AND COMPONENT STYLING....


function InlineStyle() {
    const CardStyle = {
        border: '1px solid #ddd7d7b6',
        width: '200px',
        boxShadow: '1px 2px 3px 0px #ddd7d7b6',
        margin: '10px'
    }

    return(
        <div className="container">
            <h1 style={{color:'red'}} className="p-3 m-2">Inline Style In React</h1>
            <div style={CardStyle}>
                <img style= {{width:'200px'}} src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg" alt="Profile pic" />
                <div style={{padding:'5px'}}>
                    <h4>Jyotsna Kushwaha</h4>
                <p>Learning Web Development</p>
                </div>
            </div>
        </div>
    )
}

export default InlineStyle;