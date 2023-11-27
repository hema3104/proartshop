import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "../assets/styles/gallery.css";

const EnlargedImage = ({ imageUrl, onClose }) => (
  <div className="enlarged-image">
    <button className="close-button" onClick={onClose}>
      Close Modal
    </button>
    <img src={imageUrl} alt="Full Size" />
  </div>
);

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/products/images");
        const data = await response.json();
        setImageUrls(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <h2>Art Gallery</h2>
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="image-wrapper"
            onClick={() => openModal(imageUrl)}
          >
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
      >
        {selectedImage && (
          <EnlargedImage imageUrl={selectedImage} onClose={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
