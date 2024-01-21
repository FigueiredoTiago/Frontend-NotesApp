import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.scss";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import close from "../../assets/img/close.png";
import { FormSearchData } from "../../interfaces/notes.interface";

import { useGetNoteByTitle } from "../../services/API";
import { useState } from "react";
import NoteCardSearch from "../NoteCard/NoteCardSearch";

const Header = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { getNoteByTitle, data, loading, error } = useGetNoteByTitle();
  const [showResults, setShowResults] = useState(true);

  const onSubmit: SubmitHandler<FormSearchData> = async (
    data: FormSearchData,
  ) => {
    await getNoteByTitle(data.title || "");
  };

  const handleToggleResults = () => {
    setShowResults(!showResults);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">CoreNotes</h1>
        </div>

        <form className="search" onSubmit={handleSubmit(onSubmit)}>
          <img src={search} alt="ícone de pesquisa" className="icon-search" />
          <input
            type="text"
            placeholder="Pesquisar notas"
            {...register("title")}
            onChange={(e) => setValue("title", e.target.value)}
          />
        </form>

        <img
          src={close}
          alt="ícone de fechar"
          className="close-btn"
          onClick={handleToggleResults}
        />

        {loading && <p>Carregando...</p>}

        {error && <p>{error}</p>}

        {showResults && data && (
          <div className="search-results container">
            {data.map((note) => (
              <NoteCardSearch key={note.id} {...note} />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
