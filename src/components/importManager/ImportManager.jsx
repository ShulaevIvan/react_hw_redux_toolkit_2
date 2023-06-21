import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadImage } from "../../redux/slices/loadImageSlice";
import PhotoItem from "../photoItem/PhotoItem";

const ImportManager = () => {
    const {images} = useSelector((state) => state.images);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const imgRef = useRef(null);

    const uploadFileHandler = () => {
        const files = inputRef.current.files;
        const imgBlob = URL.createObjectURL(files[0]);
        const imgToState = {id: Math.random(), blob: imgBlob}
        dispatch((loadImage(imgToState)));
        imgRef.current.src = imgBlob;
    };

    return (
        <React.Fragment>
            <div className="container-manager">
                <div className="input-manager-wrap">
                    <div className="input-manager-last-photo-wrap">
                        <div className="input-manager-last-photo-item-wrap">
                            {images.length > 0 ? <img ref={imgRef} alt="" src={imgRef.current.src} /> : <img  ref={imgRef} alt={''} /> }
                        </div>

                        <div className="other-photo-row">
                            {images.map((item, i) => {
                                return (
                                    <PhotoItem key={Math.random() + i} img={item.blob} />
                                )
                            }).slice(0,-1)}
                        </div>
                    </div>
                    <div className="input-manager-btn-wrap">
                        <input ref={inputRef} className="input-manager-btn" type="file" onChange={uploadFileHandler} />
                    </div>
                </div>
                
                
            </div>
        </React.Fragment>
    );
};

export default ImportManager;