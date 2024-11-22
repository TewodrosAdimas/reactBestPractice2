import Button from "./components/button";
function App() {
  const name = "Tedi";
  const onClickHandler = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Button
        name={name}
        color="secondary"
        onClickHandler={onClickHandler}
      ></Button>
    </div>
  );
}

export default App;
