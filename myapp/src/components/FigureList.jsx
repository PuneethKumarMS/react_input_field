import React, {useState} from "react";
import BasicFigure from "./BasicFigure";
import '../App.css';

function FigureList () {

    const[figures, setFigures] = useState([
        {id: 1, imageUrl:"https://img.jagranjosh.com/images/2023/March/1732023/puneeth-rajkumar-birth-anniversary.webp", caption: "Image 1"},
        {id: 2, imageUrl:" https://img.jagranjosh.com/images/2023/March/1732023/puneeth-rajkumar-birth-anniversary.webp ", caption: "Image 2"},
    ]);


    const[newImageUrl, setNewImageUrl] = useState("");
    const[newCaption, setNewCaption] = useState("");

    const addFigure = () => {
        if(newImageUrl && newCaption){
            setFigures([...figures, {id: Date.now(), imageUrl: newImageUrl, caption: newCaption}]);
            setNewImageUrl("");
            setNewCaption("");
        }
    };

    const removeFigure = (id) => {
        setFigures(figures.filter((figure) => figure.id !== id));
    };

    return(
        <div className="figure-list-container">
            <h2>Image Gallery</h2>

            <div className="input-container">

                <input 
                type="text"
                value = {newImageUrl}
                class = "input"
                placeholder="Image URL"  
                onChange={(e) => setNewImageUrl(e.target.value)}
                />

                <br />

                <input 
                type="text"
                value={newCaption}
                class = "input"
                placeholder="Caption"
                onChange={(e) => setNewCaption(e.target.value)} 
                />

                <br />

                <button onClick={addFigure}>Add Image</button>
            </div>

            <div className="figure-grid">

                {figures.map((figure)=> (

                    <BasicFigure
                    key={figure.id}
                    imageUrl={figure.imageUrl}
                    caption={figure.caption}
                    onDelete={() => removeFigure(figure.id)}
                    />
                ))}

            </div>

        </div>
    );
}
export default FigureList;