import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import edit from "../../assets/img/edit.svg";
import "./styles.scss";

import star from "../../assets/img/star.png";
import starGold from "../../assets/img/starGold.png";
import submit from "../../assets/img/submit.png";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { FormData } from "../../interfaces/notes.interface";
import { useUpdateNote } from "../../services/API";
import { useGetNoteById } from "../../services/API";
import { Note } from "../../interfaces/notes.interface";
import { NewNoteUpCardProps } from "../../interfaces/notes.interface";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  //   bgcolor: "background.paper", //colocar aqui a cor do card
  //   boxShadow: 24,
  p: 4,
};

export const UpdateNote: React.FC<NewNoteUpCardProps> = ({
  id,
  updateNewNoteList,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>();

  const { data, loading } = useGetNoteById(id);

  const [favorite, setFavorite] = useState(false);

  const { updateNote } = useUpdateNote(id);

  //   console.log(data);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const updatedNote: Note = {
      _id: "",
      title: data.title,
      description: data.description,
      color: data.color,
      favorite: favorite,
    };

    console.log(data);

    await updateNote(updatedNote);

    updateNewNoteList(updatedNote);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img
        src={edit}
        alt="edit icon"
        className="edit-btn"
        onClick={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)} className="new-note">
            {data && (
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Titulo"
                className="input-title"
              />
            )}

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
        </Box>
      </Modal>
    </div>
  );
};
