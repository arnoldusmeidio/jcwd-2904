import "./App.css";
import ProfilePicture from "./components/ProfilePicture";
import UserInfo from "./components/UserInfo";
import Button from "./components/Button";

function App() {
  const user = {
    name: "Kocheng",
    address: "London, United Kingdom",
    about: "Majikan handal. Penikmat Ikan Tuna",
  };

  return (
    <>
      <div className="card">
        <ProfilePicture />
        <UserInfo name={user.name} address={user.address} about={user.about} />
        <ul>
          <li>
            <Button link="GitHub" />
          </li>
          <li>
            <Button link="Frontend Mentor" />
          </li>
          <li>
            <Button link="LinkedIn" />
          </li>
          <li>
            <Button link="Twitter" />
          </li>
          <li>
            <Button link="Instagram" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
