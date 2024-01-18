import "./styles.scss";
// import star from "../../assets/img/star.png";

const NewNote = () => {
  return (
    <form className="new-note">

      <input type="text" placeholder="Titulo" className="input-title" />

      <input type="text" placeholder="Criar nota..." className="input-note" />

      {/* <img src={star} alt="star icon" className="star-icon" /> */}
    </form>
  );
};

export default NewNote;
