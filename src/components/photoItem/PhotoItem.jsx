import React from "react";

const PhotoItem = (props) => {
    return (
        <React.Fragment>
            <div className="other-photo-item">
                <img src={props.img} alt="#" />
            </div>
        </React.Fragment>
    );
};

export default PhotoItem;