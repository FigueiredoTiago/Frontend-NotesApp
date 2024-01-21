import "./styles.scss";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import submit from "../../assets/img/submit.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FormData } from "../../interfaces/notes.interface";
import { useCreateNote } from "../../services/API";
import { Note } from "../../interfaces/notes.interface";
import { NewNoteCardProps } from "../../interfaces/notes.interface";

const NewNote: React.FC<NewNoteCardProps> = ({ updateNewNoteList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [favorite, setFavorite] = useState(false);

  const { createNote } = useCreateNote();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //falta enviar a color

    const newNote: Note = {
      title: data.title,
      description: data.description,
      color: "#29ffc9",
      favorite: favorite,
      _id: "",
    };

    await createNote(newNote);
    // console.log(newNote);

    updateNewNoteList(newNote);

    reset();
  };

  const handleStarClick = () => {
    setFavorite(!favorite);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="new-note">
      <input
        type="title"
        {...register("title", { required: true })}
        placeholder="Titulo"
        className="input-title"
      />

      <textarea
        {...register("description", { required: true })}
        placeholder="Descrição"
        className="input-note"
      />

      <button
        type="button"
        className={` star-icon star-icon-button ${favorite ? "starred" : ""}`}
        onClick={handleStarClick}
      >
        {favorite ? (
          <img src={starGold} alt="star button" />
        ) : (
          <img src={star} alt="star button" />
        )}
      </button>

      <button type="submit" className="submit-btn">
        <img src={submit} alt="icon submit" />
      </button>

      <div className="form-error">
        {errors.title && <p>Titulo é Obrigatorio!</p>}
        {errors.description && <p>Descrição é Obrigatoria!</p>}
      </div>
    </form>
  );
};

export default NewNote;
