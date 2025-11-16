function PureFunction() {
  return (
    <>
      <h1>Keeping Component Pure</h1>;
        <Counter count={1}/>
        <Counter count={2}/>
        <Counter count={3}/>
        <Counter count={4}/>
    </>
  );
}

const Counter = ({count}) => {
    return <h1>Counter{count}</h1>
}

export default PureFunction;
