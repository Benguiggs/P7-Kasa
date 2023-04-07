import { useState, useEffect } from "react";


export const useCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
      console.log("component was mounted, we fetch cards")
      const abortController = new AbortController();
      fetch("/DataBase.json", { signal: AbortController.signal })
      .then((res) => res.json())
      .then((res) => setCards(res))
      .catch(console.error);
   
    return () => {
      console.log("cleanup")
      abortController.abort();
    };
  }, []);
  return cards;
};