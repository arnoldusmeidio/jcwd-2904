import styled from "styled-components";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Wrapper>
        <Form />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 50vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 2em;
  border-radius: 10px;
`;

export default App;
