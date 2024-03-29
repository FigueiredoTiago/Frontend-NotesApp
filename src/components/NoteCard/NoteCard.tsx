import "./styles.scss";
import del from "../../assets/img/delete.png";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import { UpdateNote } from "../UpdateNote/UpdateNote";
import { NoteCardFavProps } from "../../interfaces/notes.interface";
import { deleteNote } from "../../services/API";

const NoteCard: React.FC<NoteCardFavProps> = ({
  note,
  updateNoteList,
  updateNewNoteList,
}) => {
  const getBackgroundColor = () => {
    return { backgroundColor: note.color };
  };

  const handleDeleteNote = () => {
    console.log(note._id);
    confirm("Deseja mesmo deletar essa nota?");
    deleteNote(note._id);
    updateNoteList(note._id);
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

      <div className="box-icon">
        <UpdateNote id={note._id} updateNewNoteList={updateNewNoteList} />

        <img src={del} alt="color icon" onClick={() => handleDeleteNote()} />
      </div>
    </div>
  );
};

export default NoteCard;
