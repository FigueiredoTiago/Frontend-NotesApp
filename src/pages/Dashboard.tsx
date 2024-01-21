import NewNote from "../components/NewNote/NewNote";
import NoteCard from "../components/NoteCard/NoteCard";
import "./styles.scss";
import { useGetNotes } from "../services/API";
import { Note } from "../interfaces/notes.interface";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  // const { data, loading, setData } = useGetNotes();
  // const { data: favorites, setFavorite } = useGetFavorites();

  const { getNonFavoriteNotes, getFavoriteNotes, setData, loading } =
    useGetNotes();

  const favoriteNotes = getFavoriteNotes();
  const nonFavoriteNotes = getNonFavoriteNotes();

  const updateNoteList = (noteIdToDelete: string) => {
    setData((prevNotes) =>
      prevNotes !== null
        ? prevNotes.filter((note) => note._id !== noteIdToDelete)
        : [],
    );
  };

  //atualiando a lista de notas com a nova nota
  const updateNewNoteList = (newNote: Note) => {
    setData((prevNotes) =>
      prevNotes !== null ? [...prevNotes, newNote] : [newNote],
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className="create-note-section">
        <NewNote updateNewNoteList={updateNewNoteList} />
      </section>

      {/* section para mostrar apenas os favoritos */}

      <section className="favorite-section container">
        <p className="section-title">Favoritas</p>

        {favoriteNotes.map((note: Note) => (
          <NoteCard
            key={note._id}
            note={note}
            updateNoteList={updateNoteList}
            updateNewNoteList={updateNewNoteList}
          />
        ))}
      </section>

      {/* section para mostrar todos os itens da api */}

      <section className="other-section container">
        <p className="section-title">Outras</p>

        {nonFavoriteNotes.map((note: Note) => (
          <NoteCard
            key={note._id}
            note={note}
            updateNoteList={updateNoteList}
            updateNewNoteList={updateNewNoteList}
          />
        ))}
      </section>

      <ToastContainer />
    </main>
  );
};

export default Dashboard;
