import "./CSS/RadioButtons.css";
import Reach, { useState } from 'react'

const RadioButtons = () => {


    const [crop, setCrop] = useState("")


    return (

        <>

            <div className="radio-container">
                <span onClick={() => setCrop("Crop1")}>
                    <input type="radio" value={crop} checked={crop == "Crop1"} />Crop 1
                </span>
                <span onClick={() => setCrop("Crop2")}>
                    <input type="radio" value={crop} checked={crop == "Crop2"} />Crop 2
                </span>
                <span onClick={() => setCrop("Crop3")}>
                    <input type="radio" value={crop} checked={crop == "Crop3"} />Crop 3
                </span>
                <span onClick={() => setCrop("Crop4")}>
                    <input type="radio" value={crop} checked={crop == "Crop4"} />Crop 4
                </span>
                <span onClick={() => setCrop("Crop5")}>
                    <input type="radio" value={crop} checked={crop == "Crop5"} />Crop 5
                </span>
                <span onClick={() => setCrop("Crop6")}>
                    <input type="radio" value={crop} checked={crop == "Crop6"} />Crop 6
                </span>
            </div>
        </>
    )
}

export default RadioButtons