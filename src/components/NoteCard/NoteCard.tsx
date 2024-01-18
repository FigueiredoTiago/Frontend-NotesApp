import "./styles.scss";
import star from '../../assets/img/star.png';
import color from '../../assets/img/color.svg';
import edit from '../../assets/img/edit.svg';

const NoteCard = () => {
  return (
    <div className="card grid-4">

      <div className="title-card">
        <h3 className="title">Title Card</h3>

        <img src={star} alt="" />

      </div>

      <p className="note-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime
        sint fuga blanditiis ipsum nam nobis omnis sapiente, deleniti quis nisi,
        quo perferendis incidunt maiores odio. Alias earum beatae voluptatum!
      </p>

      <div className="box-icon">

        <img src={edit} alt="edit icon" />
        <img src={color} alt="color icon" />

      </div>



    </div>
  );
};

export default NoteCard;
