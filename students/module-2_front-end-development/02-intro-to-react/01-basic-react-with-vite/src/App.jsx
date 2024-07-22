import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const person = {
    first_name: "Sukarno",
    last_name: "iwan",
    name: "John",
    email: "Jojo@gmail.com",
  };

  return (
    <>
      <Header />
      <Profile name={person.name} email={person.email} age="75" />
    </>
  );
}

export default App;
