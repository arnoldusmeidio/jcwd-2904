import styled from "styled-components";

function Profile(props) {
  return (
    <>
      <ImgWrapper>
        <Img
          src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1661753020/attached_image/inilah-cara-merawat-anak-kucing-yang-tepat.jpg"
          alt="Profile Picture Kucing"
        />
      </ImgWrapper>
      <H1>{props.name}</H1>
      <H2>{props.address}</H2>
      <H3>{props.about}</H3>
    </>
  );
}

const ImgWrapper = styled.figure`
  border-radius: 50%;
  width: 6em;
  height: 6em;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  max-width: 150%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
  font-size: 2em;
  color: white;
  margin-bottom: 0.2em;
`;
const H2 = styled.h2`
  font-size: 1.5em;
  color: lightgreen;
  margin-bottom: 1em;
`;
const H3 = styled.h3`
  font-weight: 100;
  font-size: 1em;
  color: white;
  margin-bottom: 1em;
`;

export default Profile;
