import faker from 'faker';

function generateImages(number) {
    const images = [];
    while (number !== 0) {
      const value = faker.image.image();
      images.push(value);
      number--;
    }
    return images;
};
export default generateImages;

// let photo = faker.image.image();
// export default photo;