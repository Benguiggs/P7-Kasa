import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useRoom = () => {
    const [rooms, setRooms] = useState([]);
    const location = useLocation();

    useEffect(() => {
      console.log("component was mounted, we fetch rooms")
      const abortController = new AbortController();
      fetch("DataBase.json", { signal: AbortController.signal })
      .then((res) => res.json())
      .then((res) => setRooms(res))
      .catch(console.error);
   
    return () => {
      console.log("cleanup")
      abortController.abort();
    };
  }, []);
  return rooms;
};