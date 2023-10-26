import { useEffect } from "react";
import { useData } from "./DataContext";
import data from "../assets/user.json";
function DataLoader() {
  const { dispatch } = useData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        if (response.ok) {
          dispatch({ type: "SET_DATA", payload: data });
        } else {
          console.error("Ошибка при загрузке данных.");
        }
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return null;
}

export default DataLoader;
