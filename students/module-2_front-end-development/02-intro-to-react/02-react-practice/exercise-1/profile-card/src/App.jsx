import styled from "styled-components";
import "./App.css";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const user = {
    name: "Kocheng",
    address: "London, United Kingdom",
    about: "Majikan handal. Penikmat Ikan Tuna!",
  };

  return (
    <>
      <Wrapper>
        <Profile name={user.name} address={user.address} about={user.about} />
        <Social />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(56, 55, 55);
  border-radius: 12px;
  width: fit-content;
  margin: 50px auto;
  padding: 27px;
`;

export default App;
