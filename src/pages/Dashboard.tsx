import NewNote from "../components/NewNote/NewNote";
import NoteCard from "../components/NoteCard/NoteCard";
import "./styles.scss";
import { useApi } from "../services/API";
import { Note } from "../interfaces/notes.interface";

const Dashboard = () => {
  const { data, loading } = useApi();

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className="create-note-section">
        <NewNote />
      </section>

      {/* section para mostrar apenas os favoritos */}

      <section className="favorite-section">
        <p className="section-title">Favoritas</p>
        {/* Renderize os favoritos aqui */}
      </section>

      {/* section para mostrar todos os itens da api */}

      <section className="other-section">
        <p className="section-title">Outras</p>

        {data?.map((item: Note) => <NoteCard key={item.id} note={item} />)}
        
      </section>
    </main>
  );
};

export default Dashboard;
