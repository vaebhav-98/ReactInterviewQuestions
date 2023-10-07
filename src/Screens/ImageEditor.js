import React, { useState } from 'react';

function FileUploader() {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleImageUpload = (event) => {
        const fileList = Array.from(event.target.files);

        const imagesWithErrors = [];
        const validImages = [];

        fileList.forEach((file) => {
            if (file.size > 400 * 1024) {
                imagesWithErrors.push(file);
                validImages.push(file);
            } else {
                validImages.push(file);
            }
        });

        setImages(validImages);
        setErrors(imagesWithErrors);
    };

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const removeError = (index) => {
        const updatedErrors = [...errors];
        updatedErrors.splice(index, 1);
        setErrors(updatedErrors);
    };

    return (
        <div>
            <h1>Multiple Image Uploader</h1>
            <input type="file" multiple onChange={handleImageUpload} />
            {errors.length > 0 && (
                <div className="error">
                    <h2>Errors:</h2>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>
                                {error.name} - File size exceeds 400KB limit.
                                <button onClick={() => removeError(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {images.length > 0 && (
                <div>
                    <h2>Uploaded Images:</h2>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={URL.createObjectURL(image)}
                                alt={image.name}
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                            />
                            {
                               errors[index]  ?  `${errors[index].name}- File size exceeds 400KB limit.`:""
                            }
                            {/* // {image && image.name} - File size exceeds 400KB limit. */}
                            <button onClick={() => removeImage(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            {errors.length === 0 && images.length === 0 && (
                <p>No images uploaded.</p>
            )}
        </div>
    );
}

export default FileUploader;
