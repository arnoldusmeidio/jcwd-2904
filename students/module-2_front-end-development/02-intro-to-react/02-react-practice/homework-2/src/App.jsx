import styled from "styled-components";
import "./App.css";
import Drawing from "./components/Drawing";
import TextSection from "./components/TextSection";

function App() {
  return (
    <>
      <Wrapper>
        <TextSection />
        <Drawing />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 1em;
  width: 44em;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 1.5em;
  padding: 0.1em;
`;

export default App;
