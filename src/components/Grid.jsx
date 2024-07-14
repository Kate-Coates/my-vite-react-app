import React, { useState, useEffect } from "react";
import './Grid.css';
import fallbackImage from '../assets/art1.jpg';
import { Modal, Button } from 'react-bootstrap';

// import art1 from '../assets/art1.jpg';
// import art2 from '../assets/art2.jpg';
// import art3 from '../assets/art3.jpg';
// import art4 from '../assets/art4.jpg';
// import art5 from '../assets/art5.jpg';

// const images = [
//   { src: art1, name: 'Untitled by Tanaka Atsuko' },
//   { src: art2, name: "Blue and Green Music by Georgia O'Keefe" },
//   { src: art3, name: 'Starry Night and the Astronauts by Alma Thomas' },
//   { src: art4, name: 'The Great Wave by Hokusai' },
//   { src: art5, name: 'Water Lillies by Monet' },
// ];

const Grid = () => {
    const [images, setImages] = useState([]);
    // const [selectedImageName, setSelectedImageName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id');
          if (!response.ok) {
            throw new Error('Failed to fetch images');
          }
          const data = await response.json();
          const artworks = data.data;
          const imagesData = artworks.map(artwork => ({
            src: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
            name: artwork.title
          }));
          setImages(imagesData);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }, []);

// const handleImageClick = (name) => {
//   setSelectedImageName(name);
// };

const handleImageClick = (image) => {
  setSelectedImage(image);
  setShow(true);
};

const handleClose = () => {
  setShow(false);
};

  // return (
  //   <div className="container mt-4">
  //     <div className="box">
  //       <h1 className="selected-image-name">{selectedImageName}</h1>
  //     </div>
  //     <div className="row">
  //       {images.map((image, index) => (
  //         <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
  //           <div className="card">
  //             <img src={image.src} className="card-img-top" alt={`Art ${index + 1}`}
  //             onClick={() => handleImageClick(image.name)}
  //             style={{ cursor: 'pointer'}}
  //             onError={(e) => {
  //               e.target.onerror = null;
  //               e.target.src = fallbackImage;
  //               handleImageClick('Untitled by Tanaka Atsuko')
  //             }}
  //             />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="container mt-4">
      <div className="box">
        <h1 className="selected-image-name">{selectedImage?.name}</h1>
      </div>
      <div className="row">
        {images.map ((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
              src={image.src}
              className="card-img-top"
              alt={`Art ${index + 1}`}
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer'}}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
                handleImageClick({src: fallbackImage, name: 'Untitled by Tanaka Atsuko'});
              }}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && <img src={selectedImage.src} alt={setSelectedImage.name} className="img-fluid" />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Grid;
