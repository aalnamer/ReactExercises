import React, { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const { response } = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  const [cards, setCards] = useState([]);

  // const [response, setResponse] = useState([]);

  // useEffect(() => {
  //   const getData = async (dataUrl) => {
  //     const res = await axios.get(dataUrl);
  //     setResponse(res);
  //   };
  //   getData("https://deckofcardsapi.com/api/deck/new/draw/");
  // }, [cards]);

  const addCard = async () => {
    const res = response[0];
    setCards((cards) => [...cards, { ...res.data, id: uuid() }]);
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
