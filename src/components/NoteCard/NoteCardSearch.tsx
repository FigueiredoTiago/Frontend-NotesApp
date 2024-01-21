import "./styles.scss";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import { Note } from "../../interfaces/notes.interface";

const NoteCardSearch = (note: Note) => {
  const getBackgroundColor = () => {
    return { backgroundColor: note.color };
  };

  return (
    <div className="card grid-4" style={getBackgroundColor()}>
      <div className="title-card">
        <h3 className="title">{note.title}</h3>

        {note.favorite ? (
          <img src={starGold} alt="star golden icon" />
        ) : (
          <img src={star} alt="star icon" />
        )}
      </div>

      <p className="note-text">{note.description}</p>
    </div>
  );
};

export default NoteCardSearch;
