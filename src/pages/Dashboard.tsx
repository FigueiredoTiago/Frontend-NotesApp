import NewNote from "../components/NewNote/NewNote";
import NoteCard from "../components/NoteCard/NoteCard";
import "./styles.scss";
import { GetNotes } from "../services/API";

const Dashboard = () => {
  const { notes } = GetNotes();

  console.log(notes);

  return (
    <main>
      <section className="create-note-section">
        <NewNote />
      </section>

      {/* section para mostrar apenas os favoritos */}

      <section className="favorite-section">
        <p className="section-title">Favoritas</p>

        <NoteCard />
        <NoteCard />
        <NoteCard />
      </section>

      {/* section para mostrar todos os itens da api */}

      <section className="other-section">
        <p className="section-title">Outras</p>

        <NoteCard />
        <NoteCard />
        <NoteCard />
      </section>
    </main>
  );
};

export default Dashboard;
