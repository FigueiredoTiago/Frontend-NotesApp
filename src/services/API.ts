import { useState, useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";

export const GetNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3000/notes/";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url ?? "");
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { notes, setNotes, loading };
};
