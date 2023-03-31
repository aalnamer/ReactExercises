import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

const AddCard = () => {
  const [pile, setPile] = useState([]);
  const [start, setStart] = useState(false);
  const deckId = useRef();
  //   const addButton = useRef();
  const timerId = useRef();
  const startButton = useRef();
  const stopButton = useRef();

  // function to add a card (PART 1)

  //   const addCard = (e) => {
  //     e.preventDefault();
  //     async function getCard() {
  //       const cardData = await axios.get(`${BASE_URL}/${deckId.current}/draw/`);
  //       if (cardData.data.remaining === 0) {
  //         addButton.current.hidden = true;
  //         alert("All out of cards!");
  //       }
  //       const card = cardData.data.cards[0];

  //       setPile((p) => [
  //         ...p,
  //         {
  //           id: card.code,
  //           name: card.suit + " " + card.value,
  //           img: card.image,
  //         },
  //       ]);
  //     }
  //     getCard();
  //   };

  //timer
  const startTimer = (e) => {
    e.preventDefault();
    setStart(true);
  };

  useEffect(() => {
    if (start === true) {
      timerId.current = setInterval(() => {
        async function getCard() {
          const cardData = await axios.get(
            `${BASE_URL}/${deckId.current}/draw/`
          );
          if (cardData.data.remaining === 0) {
            stopButton.current.hidden = true;
            startButton.current.hidden = true;
            alert("All out of cards!");
            clearInterval(timerId.current);
          }
          const card = cardData.data.cards[0];

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
      }, 1000);

      return () => {
        clearInterval(timerId.current);
      };
    }
  }, [start]);

  const stopTimer = (e) => {
    e.preventDefault();
    clearInterval(timerId.current);
    setStart(false);
  };

  // getting deck id
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
        {/* <button onClick={addCard} ref={addButton}>
          Add Card
        </button> */}
        <button onClick={startTimer} ref={startButton}>
          Start timer
        </button>
        <button onClick={stopTimer} ref={stopButton}>
          Stop timer
        </button>
      </form>

      {listPile}
    </div>
  );
};

export default AddCard;
