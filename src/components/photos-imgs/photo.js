import './photo.css';

function Photo(props) {
  return (
    <div className="">
        <img src={props.image} className="grid-gallery__image" alt="photo" />
    </div>
  );
}

export default Photo;