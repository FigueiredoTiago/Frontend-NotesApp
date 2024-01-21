import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Note } from "../interfaces/notes.interface";

//rota para pegar todas as notas

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

  // Retorna as notas favoritas e o restante das notas
  const getFavoriteNotes = () => {
    return data ? data.filter((note) => note.favorite) : [];
  };

  const getNonFavoriteNotes = () => {
    return data ? data.filter((note) => !note.favorite) : [];
  };

  return {
    data,
    loading,
    setData,
    getFavoriteNotes,
    getNonFavoriteNotes,
  } as const;
};

// export const useGetNotes = () => {
//   const [data, setData] = useState<Note[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const apiUrl = "http://localhost:3000/notes/";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<{ notes: Note[] }> =
//           await axios.get(apiUrl);
//         setData(response.data.notes);
//         setLoading(false);
//       } catch (error) {
//         console.error(`Error fetching data from ${apiUrl}:`, error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   return { data, loading, setData } as const;
// };

//rota para pegar as notas favoritas
// export const useGetFavorites = () => {
//   const [data, setFavorite] = useState<Note[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const apiUrl = "http://localhost:3000/notes/favorites";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<{ notes: Note[] }> =
//           await axios.get(apiUrl);
//         setFavorite(response.data.notes);
//         setLoading(false);
//       } catch (error) {
//         console.error(`Error fetching data from ${apiUrl}:`, error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl]);

//   return { data, loading, setFavorite } as const;
// };

//rota para criar novas notas
export const useCreateNote = () => {
  const [note, setNewNote] = useState<{ message: string; note: Note } | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = "http://localhost:3000/notes/";

  const createNote = async (data: Note) => {
    try {
      setLoading(true);
      const response: AxiosResponse<{ message: string; note: Note }> =
        await axios.post(apiUrl, data);
      setNewNote(response.data);
    } catch (error) {
      console.error(`Error creating note:`, error);
    } finally {
      setLoading(false);
    }
  };

  return { note, loading, createNote } as const;
};

//rota para deletar notas

export const deleteNote = async (noteId: string) => {
  const url = `http://localhost:3000/notes/${noteId}`;
  try {
    const response = await axios.delete(url);
    return console.log(response.data);
  } catch (error) {
    console.error(`Error deleting note at ${url}:`, error);
  }
};

//rota para atualizar notas

export const useUpdateNote = (id: string) => {
  const [note, setNewNote] = useState<{ message: string; note: Note } | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = `http://localhost:3000/notes/${id}`;

  const updateNote = async (data: Note) => {
    try {
      setLoading(true);
      const response: AxiosResponse<{ message: string; note: Note }> = await axios.patch(apiUrl, data);
      setNewNote(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(`Error creating note:`, error);
    } finally {
      setLoading(false);
    }
  };

  return { note, loading, updateNote } as const;
};

//rota para pegar uma nota pelo id

export const useGetNoteById = (id: string) => {
  const [data, setData] = useState<Note | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = `http://localhost:3000/notes/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Note> = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching data from ${apiUrl}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, id]);

  return { data, loading, setData } as const;
};
