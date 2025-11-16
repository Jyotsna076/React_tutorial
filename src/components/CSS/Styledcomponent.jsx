import styles from "styled-components";

function Styledcomponent() {
  // const Heading = styles.h1`
  // color: blue;
  // border: 1px solid black;
  // border-radius: 5px;
  // width: 480px;
  // padding: 10px
  // `

  const Heading = styles.h1({
    color: "blue",
    border: "1px solid black",
    borderRadius: "5px",
    width: "480px",
    padding: "10px",
  });
  
  return (
    <>
      <h1>Styled Component</h1>
      <Heading>Hello Heading Styled Component</Heading>
      <Heading>Hello Heading Styled Component</Heading>
      <Heading>Hello Heading Styled Component</Heading>
      <Heading>Hello Heading Styled Component</Heading>
    </>
  );
}

export default Styledcomponent;
