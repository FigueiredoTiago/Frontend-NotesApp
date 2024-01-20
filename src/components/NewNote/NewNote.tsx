import "./styles.scss";
import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import submit from "../../assets/img/submit.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const NewNote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isStarred, setIsStarred] = useState(false);

  interface FormData {
    title: string;
    description: string;
    color?: string;
    favorite?: boolean;
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  const handleStarClick = () => {
    setIsStarred(!isStarred);
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
        className={` star-icon star-icon-button ${isStarred ? "starred" : ""}`}
        onClick={handleStarClick}
      >
        {/* Adicione a imagem ou ícone desejado aqui */}
        {isStarred ? (
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
