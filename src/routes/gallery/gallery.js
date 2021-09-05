import Photo from '../../components/photos-imgs/photo';
import './gallery.css';
import photo from '../../mocks/photos-gallery'



function Gallery() {
  return (
    <div className="Gallery">
        <p>
          Gallery
        </p>
        <div>
            <Photo image={photo}></Photo>
        </div>
    </div>
  );
}

export default Gallery;