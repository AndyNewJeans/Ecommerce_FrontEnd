import React, { useState, useEffect } from "react";
import { ProductDetailDto } from "../../../data/ProductDto.ts";

type Props = {
  productDetail: ProductDetailDto;
}

const Gallery = ({ productDetail }: Props) => {
  const [currentImage, setCurrentImage] = useState<string | undefined>(productDetail.image_url);
  const [currentPassedImage, setCurrentPassedImage] = useState<string | undefined>();

  const [open, setOpen] = useState(false);

  // Assuming you want to use the same image URL for all images in the gallery for now
  const IMAGES = [productDetail.image_url, productDetail.image_url, productDetail.image_url];
  const THUMBS = [productDetail.image_url, productDetail.image_url, productDetail.image_url];

  const handleClick = (index: number) => {
    setCurrentImage(IMAGES[index]);
  };

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeActivatedClass = (parent: HTMLElement) => {
    parent.childNodes.forEach((node) => {
      const element = node as HTMLElement;
      element.firstChild && element.firstChild.classList.contains("activated") &&
      element.firstChild.classList.remove("activated");
    });
  };

  useEffect(() => {
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  return (
      <section className="gallery-holder hide-in-mobile">
        <section className="gallery">
          <div className="image">
            <img src={currentImage} alt="product-display" onClick={handleToggle} />
          </div>
          <div className="thumbnails">
            {THUMBS.map((th, index) => (
                <div
                    className="img-holder"
                    key={index}
                    onClick={(e) => {
                      handleClick(index);
                      removeActivatedClass(e.currentTarget.parentNode as HTMLElement);
                      e.currentTarget.childNodes[0].classList.toggle("activated");
                    }}
                >
                  <div className={`outlay ${index === 0 ? "activated" : ""}`}></div>
                  <img src={th} alt={`product-thumbnail-${index + 1}`} />
                </div>
            ))}
          </div>
        </section>
      </section>
  );
};

export default Gallery;
