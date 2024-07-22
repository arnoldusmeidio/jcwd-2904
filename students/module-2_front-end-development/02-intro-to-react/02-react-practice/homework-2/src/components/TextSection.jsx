import styled from "styled-components";
import Checkmark from "../assets/icons8-check.svg";

function TextSection() {
  return (
    <Container>
      <StyledH1>Stay updated!</StyledH1>
      <StyledP>
        Join 60,000+ product managers receiving monthly updates on:
      </StyledP>

      <StyledUl>
        <StyledLi>Product discovery and building what matters</StyledLi>
        <StyledLi>Measuring to ensure updates are a success</StyledLi>
        <StyledLi>And much more!</StyledLi>
      </StyledUl>

      <StyledLabel htmlFor="email">Email address</StyledLabel>
      <StyledInput
        type="email"
        name="email"
        id=""
        placeholder="email@company.com"
      />
      <StyledButton>Subscribe to monthly newsletter</StyledButton>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 25em;
  margin-left: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 0.75em;
  margin-top: 1em;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0.5em;
`;

const StyledLi = styled.li`
  font-size: 0.75em;
  margin-top: 0.5em;
  &:before {
    position: relative;
    top: 0.2em;
    display: inline-block;
    width: 1.3em;
    height: 1.3em;
    margin-right: 0.8em;
    content: "";
    background: url(${Checkmark}) no-repeat;
    background-size: 100%;
  }
`;

const StyledLabel = styled.label`
  font-size: 0.55em;
  font-weight: 700;
  display: block;
  margin-top: 3em;
  margin-bottom: 0.8em;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3em;
  font-size: 0.8em;
  padding-left: 1em;
  border-radius: 12px;
  border: 1px solid rgb(196, 196, 196);
`;

const StyledButton = styled.button`
  margin-top: 1em;
  width: 100%;
  height: 3.5em;
  border: none;
  border-radius: 12px;
  background-color: rgb(35, 39, 66);
  color: white;
  font-size: 0.7em;
  font-weight: 600;
  cursor: pointer;
`;

export default TextSection;
