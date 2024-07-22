import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="./company">Company Profile</Link>
    </>
  );
}

export default About;
