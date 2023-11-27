import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src={product.image}
              alt={product.name}
              fluid
              style={{ marginRight: "10px" }}
            />
            <div className="ml-4">
              <h1 style={{ color: "yellow" }}>Art Exhibition</h1>
              {product.exhibitionDate ? (
                <p style={{ color: "white" }}>
                  <strong>Date & Time: </strong>
                  {product.exhibitionDate}
                </p>
              ) : null}

              {product.exhibitionVenue ? (
                <p style={{ color: "white" }}>
                  <strong>Venue: </strong>
                  {product.exhibitionVenue}
                </p>
              ) : null}

            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;