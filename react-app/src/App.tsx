import AlertButton from "./components/AlertButton";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alertVisible, SetAlertVisible] = useState(false);
  const name = "Tedi";
  const onClickHandler = () => {
    SetAlertVisible(true);
  };
  const alertHandler = () => {
    SetAlertVisible(false);
  };
  return (
    <div>
      {alertVisible && <Alert AlertHandler={alertHandler} />}
      <AlertButton
        name={name}
        color="secondary"
        onClickHandler={onClickHandler}
      ></AlertButton>
    </div>
  );
}

export default App;
