function UserInfo(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <h3>{props.about}</h3>
    </>
  );
}

export default UserInfo;
