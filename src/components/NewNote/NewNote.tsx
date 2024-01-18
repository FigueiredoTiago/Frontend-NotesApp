import "./styles.scss";

const NewNote = () => {
  return (
    <div className="grid-6 new-box">
      <form>
        <input type="text" placeholder="Titulo" className="input-title" />
        <input type="text" placeholder="Criar nota..." className="input-note" />
      </form>
    </div>
  );
};

export default NewNote;
