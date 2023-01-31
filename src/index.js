import React from "react";
import "./components/styles.css";

const ProductCard = (props) => {
  const type =
    props.type === "disable" ? (
      <div className="card">
        <img
          src="https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp"
          className="card-img-top-disable"
        />
        <div className="card-body">
          <p className="title-product">
            NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga
          </p>
          <p className="price">Rp. 3.550.000</p>
          <div className="discount">
            <span className="price-discount">Rp. 1000.0000</span>
            <span className="card-discount">99%</span>
          </div>
          <button className="button-out-of-stock">Out of stock</button>
        </div>
      </div>
    ) : (
      <div className="card">
        <img
          src="https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp"
          className="card-img-top"
        />
        <div className="card-body">
          <p className="title-product">
            NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga
          </p>
          <p className="price">Rp. 3.550.000</p>
          <div className="discount">
            <span className="price-discount">Rp. 1000.0000</span>
            <span className="card-discount">99%</span>
          </div>
          <button className="button-add">Add to bag</button>
        </div>
      </div>
    );

  const size =
    props.size === "small" ? (
      <div className="card-small">
        <img
          src="https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp"
          className="card-img-top"
        />
        <div className="card-body">
          <p className="title-product">
            NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga
          </p>
          <p className="price">Rp. 3.550.000</p>
          <div className="discount">
            <span className="price-discount">Rp. 1000.0000</span>
            <span className="card-discount">99%</span>
          </div>
          <button className="button-add-small">Add to bag</button>
        </div>
      </div>
    ) : (
      <div className="card">
        <img
          src="https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp"
          className="card-img-top-small"
        />
        <div className="card-body">
          <p className="title-product">
            NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga
          </p>
          <p className="price">Rp. 3.550.000</p>
          <div className="discount">
            <span className="price-discount">Rp. 1000.0000</span>
            <span className="card-discount">99%</span>
          </div>
          <button className="button-add">Add to bag</button>
        </div>
      </div>
    );

  const product = props.type === "disable" ? type : size;
  return <div>{product}</div>;
};

export default ProductCard;
