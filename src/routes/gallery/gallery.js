import Photo from '../../components/photos-imgs/photo';
import './gallery.css';
// import photo from '../../mocks/photos-gallery'

import generateImages from '../../mocks/photos-gallery'

const photos = generateImages(102);
const listItems = photos.map((photo) =>
  <Photo image={photo} className=""></Photo>
);

function Gallery() {
  return (
    <div className="grid-gallery">
      {listItems}
    </div>
  );
}

export default Gallery;