import "./styles.scss";
import star from "../../assets/img/star.png";

const NewNote = () => {
  return (
    <div className="new-box ">

      <form className="grid-12">
        
        <div className="input-container">
            <input type="text" placeholder="Titulo" className="input-title" />
            <input type="text" placeholder="Criar nota..." className="input-note" />
            <img src={star} alt="star icon" className="star-icon" />
        </div>

        
      </form>
    </div>
  );
};

export default NewNote;
