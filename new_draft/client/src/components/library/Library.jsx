import React, { useState } from 'react';
import NavBar from '../dashboard/NavBar';
import Chatbot from './Chatbot'
import '../../CSS/Library.css';
import carrot from "../../images/carrot.jpg";
import corn from "../../images/corn.jpg";
import mangoes from "../../images/mangoes.jpg";
import mustard from "../../images/mustard.jpg";
import sugarcane from "../../images/sugarcane.jpg";
import potato from "../../images/potato.jpg";
import pulses from "../../images/pulses.jpg";
import rice from "../../images/rice.jpg";
import tomatoes from "../../images/tomatoes.jpg";
import wheat from "../../images/wheat.jpg";
import jowar from "../../images/jowar.jpeg";

const Library = () => {
    const cardData = [
        {
            id: 1,
            image: carrot,
            title: "Carrot",
            text: "Carrots thrive in well-drained, sandy loam soil. They are ideal for cooler months, making them suitable for cultivation in the northern regions of India. Sow carrot seeds directly in the ground, and thin out the seedlings to ensure proper spacing. Keep the soil evenly moist to prevent cracking. Protect your crop from root-knot nematodes by practicing crop rotation and using organic pest control methods. Harvest when the roots have reached a desirable size and color, usually around 70-80 days after sowing.",
        },
        {
            id: 2,
            image: corn,
            title: "Corn",
            text: "Maize or corn prefers warm and sunny conditions. It's one of the staple crops in India. Plant maize seeds in well-drained soil when the temperature consistently stays above 10°C. Adequate spacing between plants and rows is crucial for proper growth and pollination. Keep an eye out for common pests like corn earworm, and consider implementing integrated pest management strategies for a healthy crop.",
        },
        {
            id: 3,
            image: sugarcane,
            title: "Sugarcane",
            text: "Sugarcane cultivation is well-suited to tropical climates and well-drained soil. In India, it's typically planted in the summer, from April to June. Adequate irrigation and periodic draining of fields are essential for sugarcane. Additionally, regular fertilization and weed management practices are necessary for a high-yielding crop. Harvest sugarcane when the stalks are mature, ensuring proper ripeness and sugar content.",
        },
        {
            id: 4,
            image: mangoes,
            title: "Mangoes",
            text: "Mango trees thrive in hot and dry climates, making them well-suited for many parts of India. They grow best in well-drained, loamy soil. Regular pruning helps in maintaining the tree's shape and promoting fruit production. Keep the tree free from pests and diseases, and use organic and environmentally friendly control methods whenever possible. Harvest mangoes when they are fully ripe, and enjoy their sweet and juicy flavor.",
        },
        {
            id: 5,
            image: mustard,
            title: "Mustard",
            text: "Mustard grows best in well-drained, loamy soil and cooler weather. It's often sown in India during the winter season, from October to December. Adequate nutrients and moisture are crucial for healthy growth. Mustard plants attract several beneficial insects, making them a valuable addition to crop rotation practices. Harvest mustard seeds when the pods turn yellow, typically around 100-120 days after sowing.",
        },
        {
            id: 6,
            image: potato,
            title: "Potato",
            text: "Potatoes are versatile and grow well in loose, well-drained soil. In India, they are typically planted during the cool season, either in the fall or just before the monsoon. Hilling the soil around the plant helps tuber formation and prevents greening. Keep the soil consistently moist but not waterlogged. Vigilance against diseases like late blight is essential to protect your potato crop.",
        },
        {
            id: 7,
            image: rice,
            title: "Rice",
            text: "Rice is a staple crop in India and thrives in flooded fields, particularly in the eastern regions. Plant rice during the rainy season in standing water. Submerged transplanting is a common method for rice cultivation. The crop requires continuous irrigation, especially during the reproductive stage. Effective pest and disease management, such as for stem borers and blast, is crucial to ensure a successful harvest.",
        },
        {
            id: 8,
            image: tomatoes,
            title: "Tomato",
            text: "Tomatoes grow well in well-drained, fertile soil. In India, they are often planted in the cool season or just before the monsoon. Providing support for the tomato vines, such as stakes or cages, prevents damage to the fruit. Keep the soil consistently moist but not waterlogged, and consider mulching to retain moisture. Regularly inspect for pests and diseases like aphids and early blight.",
        },
        {
            id: 9,
            image: pulses,
            title: "Pulses",
            text: "Pulses like lentils and chickpeas are essential sources of protein in Indian cuisine. They are great nitrogen fixers, enriching the soil. Plant them in well-drained soil during the cool season, and consider rotating them with other crops to improve soil health. Proper spacing between plants and adequate organic matter are essential for their development. Keep a close watch on pests and diseases and implement timely control measures.",
        },
        {
            id: 10,
            image: tomatoes,
            title: "Tomato",
            text: "Tomatoes grow well in well-drained, fertile soil. In India, they are often planted in the cool season or just before the monsoon. Providing support for the tomato vines, such as stakes or cages, prevents damage to the fruit. Keep the soil consistently moist but not waterlogged, and consider mulching to retain moisture. Regularly inspect for pests and diseases like aphids and early blight.",
        },
        {
            id: 11,
            image: wheat,
            title: "Wheat",
            text: "Wheat prefers well-drained loamy soil and is typically planted in India during the cool season, from November to December. Adequate fertilization with nitrogen and other essential nutrients is crucial for optimal growth. Keep an eye out for common wheat diseases like rust and aphid infestations. Timely planting and proper seed rate help in achieving a healthy and high-yielding wheat crop.",
        },
        {
            id: 12,
            image: jowar,
            title: "Jowar",
            text: "Sorghum, similar to wheat, thrives in well-drained loamy soil and is often planted in India during the cool season, typically from November to December. Ensuring adequate fertilization with essential nutrients, including nitrogen, is essential for promoting healthy growth and high yields of sorghum. Like wheat, sorghum is susceptible to common diseases and pests such as rust and aphids. To achieve a successful sorghum crop, it is important to pay attention to timely planting and using the proper seed rate to ensure optimal results.",
        },
        // Add more card objects here...
    ];

    const characterLimit = 120;

    const [showFullText, setShowFullText] = useState(Array(cardData.length).fill(false));

    const toggleText = (index) => {
        const updatedShowFullText = [...showFullText];
        updatedShowFullText[index] = !updatedShowFullText[index];
        setShowFullText(updatedShowFullText);
    };

    return (
        <>
            <NavBar />
            <h1 className="title">Library</h1>
            <hr />
            <div className="container">
                <div className="card-grid">
                    {cardData.map((card, index) => (
                        <div key={card.id} className={`card1 ${showFullText[index] ? 'full-text' : ''}`}>
                            <img src={card.image} alt="" />
                            <h3>{card.title}</h3>
                            <span className={`${showFullText[index] ? 'show' : ''}`}>
                                {showFullText[index] ? card.text : card.text.slice(0, characterLimit)}
                            </span>
                            <button onClick={() => toggleText(index)}>
                                {showFullText[index] ? "View Less" : "View More"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Library;
