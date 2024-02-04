//import styles
import "./App.css";

//import from react
import { useState } from "react";

//import from components
import Button from "./Components/Button/Button";
import MinuteCountdown from "./Components/Counter/Counter";
import Box from "./Layout/Box/Box";
import Container from "./Layout/Container/Container";

function App() {
  const [minute, setMinutes] = useState(25);
  const [status, setStatus] = useState(false);
  const [containerBackground, setContainerBackground] =
    useState("red-background");
  const [activeButton, setActiveButton] = useState("پومودورو");

  const audio = new Audio("/click-sound.mp3");

  return (
    <>
      <Container background={containerBackground}>
        <Box>
          <div className="flag-buttons">
            <Button
              padding={"5px 10px"}
              background={
                activeButton === "پومودورو" ? "rgba(0,0,0,0.2)" : "transparent"
              }
              color={"white"}
              title={"پومودورو"}
              onClick={() => {
                setContainerBackground("red-background");
                setActiveButton("پومودورو");
                setMinutes(25);
                setStatus(false);
              }}
            />
            <Button
              padding={"5px 10px"}
              background={
                activeButton === "استراحت کوتاه"
                  ? "rgba(0,0,0,0.2)"
                  : "transparent"
              }
              color={"white"}
              title={"استراحت کوتاه"}
              onClick={() => {
                setContainerBackground("green-background");
                setActiveButton("استراحت کوتاه");
                setMinutes(5);
                setStatus(false);
              }}
            />
            <Button
              padding={"5px 10px"}
              background={
                activeButton === "استراحت طولانی"
                  ? "rgba(0,0,0,0.2)"
                  : "transparent"
              }
              color={"white"}
              title={"استراحت طولانی"}
              onClick={() => {
                setContainerBackground("blue-background");
                setActiveButton("استراحت طولانی");
                setMinutes(15);
                setStatus(false);
              }}
            />
          </div>
          {status ? (
            <>
              <MinuteCountdown minutes={minute} />
              {() => setStatus(false)}
            </>
          ) : (
            <>
              <span className="timer">
                {(activeButton === "پومودورو" && "25:0") ||
                  (activeButton === "استراحت کوتاه" && "5:0") ||
                  (activeButton === "استراحت طولانی" && "15:0")}
              </span>
            </>
          )}
          <Button
            title={status ? "ریست" : "شروع"}
            padding={"10px 50px"}
            background={"white"}
            color={"#ba4949"}
            border={"2px solid #ddd"}
            onClick={() => {
              setStatus(!status);
              audio.play();
            }}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
