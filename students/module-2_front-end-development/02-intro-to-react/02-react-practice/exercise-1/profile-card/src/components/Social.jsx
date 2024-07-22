import styled from "styled-components";

function Social() {
  return (
    <>
      <ul>
        <List>
          <Button>Github</Button>
        </List>
        <List>
          <Button>Frontend Mentor</Button>
        </List>
        <List>
          <Button>LinkedIn</Button>
        </List>
        <List>
          <Button>Twitter</Button>
        </List>
        <List>
          <Button>Instagram</Button>
        </List>
      </ul>
    </>
  );
}

const Button = styled.button`
  border: none;
  color: white;
  background-color: rgb(94, 94, 94);
  width: 100%;
  border-radius: 8px;
  padding: 1em 6.5em;
  margin: 0.5em 0;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: white;
    color: black;
  }
`;

const List = styled.li`
  list-style-type: none;
`;

export default Social;
