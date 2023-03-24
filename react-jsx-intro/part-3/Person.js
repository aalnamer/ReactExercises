const Person = (props) => {
  let reply;
  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
  if (props.age > 18) {
    reply = <h3>Please go vote!</h3>;
  } else {
    reply = <h3>You must be 18!</h3>;
  }

  return (
    <p>
      Learn some information about this person
      {reply}
      <li>Name: {props.name.slice(0, 6)} </li>
      <li>Age: {props.age}</li>
      <p>
        <b>Hobbies</b>
        {hobbies}
      </p>
    </p>
  );
};
