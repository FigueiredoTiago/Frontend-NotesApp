import NewNote from "../components/NewNote/NewNote";
import NoteCard from "../components/NoteCard/NoteCard";
import "./styles.scss";
import { useGetNotes, useGetFavorites } from "../services/API";
import { Note } from "../interfaces/notes.interface";

const Dashboard = () => {
  const { data, loading } = useGetNotes();
  const { data: favorites } = useGetFavorites();

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="">
      <section className="create-note-section">
        <NewNote />
      </section>

      {/* section para mostrar apenas os favoritos */}

      <section className="favorite-section container">
        <p className="section-title">Favoritas</p>
        {favorites?.map((item: Note) => <NoteCard key={item.id} note={item} />)}
      </section>

      {/* section para mostrar todos os itens da api */}

      <section className="other-section container">
        <p className="section-title">Outras</p>

        {data?.map((item: Note) => <NoteCard key={item.id} note={item} />)}
      </section>
    </main>
  );
};

export default Dashboard;
