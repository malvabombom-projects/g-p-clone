import './photo.css';

function Photo(props) {
  return (
    <div className="Photo">
        <img src={props.image} className="Photo-image" alt="photo" />
    </div>
  );
}

export default Photo;