import React from "react";
import { Link } from "react-router-dom";
import Dog from "./Dog";

function DogsHome({ dogs }) {
  console.log({ dogs });
  return (
    <div>
      <h1>Our Dogs!</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: "https://paradepets.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: "https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDEyMjI1MTIy/samoyed.jpg",
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];

DogsHome.defaultProps = { dogs };

export default DogsHome;
