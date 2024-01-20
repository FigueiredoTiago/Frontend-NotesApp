import "./styles.scss";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import color from "../../assets/img/color.svg";
import edit from "../../assets/img/edit.svg";
import { NoteCardProps } from "../../interfaces/notes.interface";

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
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

      <div className="box-icon">
        <img src={edit} alt="edit icon" />
        <img src={color} alt="color icon" />
      </div>
    </div>
  );
};

export default NoteCard;
