import NewNote from "../components/NewNote/NewNote";
import NoteCard from "../components/NoteCard/NoteCard";
import "./styles.scss";
import { useGetNotes } from "../services/API";
import { Note } from "../interfaces/notes.interface";

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
    setData((prevNotes) => {
      if (prevNotes) {
        // Encontre a nota existente no array pelo _id
        const index = prevNotes.findIndex((note) => note._id === newNote._id);

        // Se a nota existir, substitui pelos dados atualizados
        if (index !== -1) {
          const updatedNotes = [...prevNotes];
          updatedNotes[index] = newNote;
          return updatedNotes;
        } else {
          // Caso contrário, apenas adiciona a nota ao array
          return [...prevNotes, newNote];
        }
      } else {
        // Se o array ainda não existir, cria com a nota atualizada
        return [newNote];
      }
    });
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
    </main>
  );
};

export default Dashboard;
