import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Note } from "../interfaces/notes.interface";

export const useGetNotes = () => {
  const [data, setData] = useState<Note[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = "http://localhost:3000/notes/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ notes: Note[] }> =
          await axios.get(apiUrl);
        setData(response.data.notes);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching data from ${apiUrl}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, setData } as const;
};
export const useGetFavorites = () => {
  const [data, setFavorite] = useState<Note[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = "http://localhost:3000/notes/favorites";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ notes: Note[] }> =
          await axios.get(apiUrl);
        setFavorite(response.data.notes);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching data from ${apiUrl}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, setFavorite } as const;
};
