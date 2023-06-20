import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadImage } from "../../redux/slices/loadImageSlice";

const ImportManager = () => {
    const {lastLoadedImage} = useSelector((state) => state.images);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const imgRef = useRef(null);

    const uploadFileHandler = () => {
        const fiels = inputRef.current.files;
        if (fiels.length > 1)  {
            return 0;
        }
        dispatch(loadImage(JSON.stringify(fiels[0])));
        imgRef.current.src = URL.createObjectURL(fiels[0])
    }



    return (
       
        <React.Fragment>
             {console.log(JSON.parse(lastLoadedImage))}
            <div className="container-manager">
                <div className="input-manager-wrap">
                    <div className="input-manager-last-photo-wrap">
                        <div className="input-manager-last-photo-item-wrap">
                            <img  ref={imgRef} alt="#" />
                        </div>
                    </div>
                    <div className="input-manager-btn-wrap">
                        <input ref={inputRef} className="input-manager-btn" type="file" multiple onChange={uploadFileHandler} />
                    </div>
                </div>
                
                <div className="result-images-wrap">
                    <div className="result-images-row">
                        <div className="image-item-wrap">
                            <img src="https://placeimg.com/400/400/nature" alt="#" />
                        </div>
                        <div className="image-item-wrap">
                            <img src="https://placeimg.com/400/400/nature" alt="#" />
                        </div>
                        <div className="image-item-wrap">
                            <img src="https://placeimg.com/400/400/nature" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ImportManager;