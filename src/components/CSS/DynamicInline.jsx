import { useState } from "react";

function DynamicInline() {
  const [CardStyle, setCardStyle] = useState({
    border: "1px solid #ddd7d7b6",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #ddd7d7b6",
    margin: "10px",
  });

  const [textColor, setTextColor] = useState("black");
  const [grid,setGrid] = useState(true)

  const upadateTheme = (bgColor, textColor) => {
    console.log(bgColor, textColor);
    setCardStyle({ ...CardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };

  return (
    <div className="container">
      <h1 style={{ color: "red" }} className="p-3 m-2">
        Dynamic Inline Style In React
      </h1>
      <button onClick={() => upadateTheme("#777", "gold")} className="m-2">
        Gray Theme
      </button>
      <button onClick={() => upadateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>
        Toggel Grid
      </button>

      <div style={{ display: grid?"flex":"block", flexWrap:'wrap' }}>
        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>

        <div style={CardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg"
            alt="Profile pic"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jyotsna Kushwaha</h4>
            <p>Learning Web Development</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default DynamicInline;
