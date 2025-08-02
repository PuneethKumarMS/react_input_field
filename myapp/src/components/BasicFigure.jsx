import React from "react";

function BasicFigure ({imageUrl, caption, onDelete}) {

    return(
        <div className="figure-container">
            <img src={imageUrl} alt={caption} className="figure-image" />
            <p className="figure-caption">{caption}</p>
            <button onClick={onDelete} className="delete-btn">Remove</button>

        </div>
    );
}
export default BasicFigure;