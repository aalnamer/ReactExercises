import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

const AddCard = () => {
  const [pile, setPile] = useState([]);
  const deckId = useRef();
  const addButton = useRef();
  console.log(addButton);

  const addCard = (e) => {
    e.preventDefault();
    async function getCard() {
      const cardData = await axios.get(`${BASE_URL}/${deckId.current}/draw/`);
      if (cardData.data.remaining === 0) {
        addButton.current.hidden = true;
        alert("All out of cards!");
      }
      const card = cardData.data.cards[0];

      console.log(cardData.data.remaining, "REMAINING");
      setPile((p) => [
        ...p,
        {
          id: card.code,
          name: card.suit + " " + card.value,
          img: card.image,
        },
      ]);
    }
    getCard();
  };

  useEffect(function getDeckId() {
    async function getDeck() {
      const deckData = await axios.get(`${BASE_URL}/new/shuffle/`);
      const newDeckId = deckData.data.deck_id;
      deckId.current = newDeckId;
    }
    getDeck();
  }, []);

  const listPile = pile.map((d) => {
    return <img src={d.img}></img>;
  });

  return (
    <div>
      <form>
        <button onClick={addCard} ref={addButton}>
          Add Card
        </button>
      </form>

      {listPile}
    </div>
  );
};

export default AddCard;
