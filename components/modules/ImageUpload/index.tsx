import React, { useState, useRef, ChangeEvent, useEffect } from "react";

type Image = {
  id: string;
  path: string;
  file: File;
  url?: string;
};

type ImageUploadProps = {
  onChange: (result: File[]) => void;
  name?: string;
  isDisabled: boolean;
  defaultValue: string;
};

const ImageUpload = ({
  onChange,
  name,
  isDisabled,
  defaultValue,
}: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (defaultValue) {
      setImages([
        {
          id: defaultValue.substring(0, 10),
          path: defaultValue,
        },
      ]);
    }
  }, [defaultValue]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const fileArray: Image[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileArray.push({
          id: files[i].name,
          path: URL.createObjectURL(files[i]),
          file: files[i],
        });
      }

      const filteredImage = fileArray
        .map((img) => {
          const findedItem = images.find((imageList) => {
            return imageList.id === img.id;
          });
          return findedItem ? false : img;
        })
        .filter(Boolean) as Image[];

      if (filteredImage) {
        const tempImages = [...images, ...filteredImage];
        setImages(tempImages);

        const uploadImageFile = tempImages.map((img) => {
          return img.file;
        });

        onChange(uploadImageFile);
      }
    }
  };

  const onClickDelete = (id: string) => {
    const newImages = images
      .map((img) => {
        if (img.id === id) return false;
        return img;
      })
      .filter(Boolean) as Image[];
    setImages(newImages);

    const uploadImageFile = newImages.map((img) => {
      return img.file;
    });
    onChange(uploadImageFile);
  };

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const inputRender = () => {
    return (
      <input
        className="hidden"
        ref={(refValue) => {
          inputRef.current = refValue;
        }}
        type="file"
        accept="image/*"
        id={name}
        name={name}
        onChange={onChangeInput}
      />
    );
  };

  return (
    <div>
      {images.length === 0 ? (
        <button type="button" onClick={onClickUpload}>
          <span>
            <div>
              <div>+</div>
            </div>
            {inputRender()}
          </span>
        </button>
      ) : (
        images.map((image) => (
          <div key={image.id}>
            <img src={image.path} alt="notice-img" />

            <div onClick={() => onClickDelete(image.id)}>x</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageUpload;
