import "./styles.scss";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import submit from "../../assets/img/submit.png";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
    control,
  } = useForm<FormData>();

  const [favorite, setFavorite] = useState(false);

  const { createNote } = useCreateNote();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //falta enviar a color

    const newNote: Note = {
      title: data.title,
      description: data.description,
      color: data.color,
      favorite: favorite,
      _id: "",
    };

    console.log(data);

    await createNote(newNote);

    updateNewNoteList(newNote);

    reset();
  };

  const handleStarClick = () => {
    setFavorite(!favorite);
  };

  const coresPreDefinidas = [
    { valor: "#BAE2FF" },
    { valor: "#B9FFDD" },
    { valor: "##FFE8AC" },
    { valor: "#FFCAB9" },
    { valor: "#F99494" },
    { valor: "#9DD6FF" },
    { valor: "#ECA1FF" },
    { valor: "#DAFF8B" },
    { valor: "#FFA285" },
    { valor: "#CDCDCD" },
    { valor: "#979797" },
    { valor: "#A99A7C" },
  ];

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

      <Controller
        name="color"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div className="color-box">
            <select
              {...field}
              style={{
                backgroundColor: field.value,
              }}
            >
              {coresPreDefinidas.map((cor) => (
                <option
                  key={cor.valor}
                  value={cor.valor}
                  style={{
                    backgroundColor: cor.valor,
                  }}
                ></option>
              ))}
            </select>
          </div>
        )}
      />

      <button
        type="button"
        className={"star-icon star-icon-button"}
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
