import styled from "styled-components";
import Image from "../assets/photo.jpg";

function Drawing() {
  return (
    <>
      <StyledFigure>
        <StyledImg src={Image} alt="Drawing" />
      </StyledFigure>
    </>
  );
}

const StyledFigure = styled.figure`
  position: relative;
  width: 900px;
  overflow: hidden;
  border-radius: 1em;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Drawing;
