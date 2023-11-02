import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const trimmedInput = inputText.trim().toLowerCase();

        // Initialize an array to store information about matches
        let matchesInfo = [];

        // Iterate through each set of keywords and responses
        for (const [index, entry] of keywordResponses.entries()) {
            const keywords = entry.keywords;

            // Check for matching keywords
            let hits = keywords.filter(keyword => {
                const wordLower = keyword.toLowerCase();
                const trimmedLower = trimmedInput.replace(/[^\w\s]/gi, ''); // Remove punctuation for accurate matching
                return trimmedLower.includes(wordLower);
            });

            // If 2 or more hits, store the index and number of hits
            if (hits.length >= 2) {
                matchesInfo.push({ index, hits: hits.length });
            }

            // Reset hits array
            hits.length = 0;
        }

        // Define response text
        let responseText;

        // Determine the response based on the maximum number of hits
        if (matchesInfo.length > 0) {
            // Find the index with the maximum hits
            let matches = [];
            matchesInfo.forEach((element) => matches.push(element.hits));
            let matchesIndex = matches.indexOf(Math.max(...matches));
            let maxHitsIndex = matchesInfo[matchesIndex].index;

            // Set appropriate response
            responseText = keywordResponses[maxHitsIndex].response

            // Resets max hits inddex
            maxHitsIndex = -1;
            matches = 0;
        } else {
            // If no or multiple different answers are found
            responseText = "I'm afraid I cannot answer that. Please reframe your query."
        }

        // Process the user's input and generate a response based on keyword-response pairs
        setMessages(prevChat => [...prevChat, { query: inputText, response: responseText }])

        // Clear the input field
        setInputText('');
    };
    const keywordResponses = [
        {
            keywords: ['hi', 'hello', 'hey', 'there'],
            response: "Hello.How may I assist you?"
        },
        {
            keywords: ['bye', 'goodbye'],
            response: "Goodbye! If you ever have more questions or need assistance in the future, feel free to return. Have a great day!"
        },
        {
            keywords: ['monsoon farming', 'crops', 'when to sow', 'challenges'],
            response: "Monsoon farming is significant in India. Kharif crops like rice, millet, and pulses are sown with the onset of the monsoon (June to July). Challenges include erratic rainfall, water management, and crop diseases. Proper timing and sustainable practices are essential for successful monsoon farming."
        },
        {
            keywords: ['Rabi crops', 'season', 'examples'],
            response: "Rabi crops are winter crops sown from October to December and harvested in spring. Examples include wheat, barley, and mustard. These crops depend on post-monsoon rainfall and irrigation for growth."
        },
        {
            keywords: ['Green Revolution', 'impact', 'varieties'],
            response: "The Green Revolution in India, during the 1960s and 70s, introduced high-yielding crop varieties like IR8 rice and wheat. It transformed Indian agriculture, leading to increased food production and self-sufficiency. New varieties, combined with modern farming techniques, played a crucial role."
        },
        {
            keywords: ['organic farming', 'growth', 'government initiatives'],
            response: "Organic farming is on the rise in India due to increasing demand for chemical-free produce. Government initiatives like Paramparagat Krishi Vikas Yojana (PKVY) support organic farming. Farmers are adopting organic practices for healthier food and better sustainability."
        },
        {
            keywords: ['irrigation', 'major projects', 'challenges'],
            response: "India has major irrigation projects like the Bhakra-Nangal, Indira Gandhi Canal, and Sardar Sarovar. Challenges include water scarcity, inefficient water use, and maintenance of canal systems. Sustainable irrigation practices are vital for Indian agriculture."
        },
        {
            keywords: ['soil health card', 'benefits', 'how to get'],
            response: "The Soil Health Card scheme provides farmers with information about the nutrient status of their soil. It helps farmers make informed decisions about crop management and fertilizers. To get a soil health card, farmers can approach their nearest Common Service Centers (CSCs) or agriculture department offices."
        },
        {
            keywords: ['organic pesticides', 'options', 'benefits'],
            response: "Organic pesticides are gaining popularity among Indian farmers due to their eco-friendly nature. Neem-based pesticides, garlic and chili mix, and biopesticides are common options. They offer effective pest control while minimizing harm to the environment and human health."
        },
        {
            keywords: ['government subsidies', 'agriculture sector', 'schemes'],
            response: "The Indian government provides various subsidies and schemes to support the agriculture sector. These include PM-Kisan, PM Fasal Bima Yojana, and National Horticulture Mission. Farmers can benefit from financial assistance, crop insurance, and technology adoption under these schemes."
        },
        {
            keywords: ['GM crops', 'approval status', 'crops'],
            response: "Genetically modified (GM) crops like Bt cotton and Bt brinjal are approved for cultivation in India. Bt cotton, in particular, has seen widespread adoption, benefiting farmers by reducing the need for chemical pesticides. The approval status of GM crops may change over time."
        },
        {
            keywords: ['agricultural marketing', 'APMC Act', 'challenges'],
            response: "Agricultural marketing in India is regulated by the Agricultural Produce Market Committee (APMC) Act. Challenges include limited market access, lack of transparency, and price manipulation. Reforms like e-NAM (National Agriculture Market) aim to address these issues."
        },
        {
            keywords: ['rice cultivation', 'methods', 'best practices'],
            response: "Rice cultivation in Indian villages involves various methods and best practices. Farmers often use transplanting or direct seeding. Proper water management, timely weeding, and use of organic matter are crucial for successful rice farming."
        },
        {
            keywords: ['wheat farming', 'season', 'sowing'],
            response: "Wheat farming in Indian villages typically occurs during the Rabi season. It's sown from October to December. Early sowing is recommended for better yields, and proper spacing of seeds is essential."
        },
        {
            keywords: ['paddy', 'variety', 'high-yielding varieties'],
            response: "When it comes to paddy farming, selecting the right variety is vital. High-yielding varieties like Swarna, Sona Masuri, and Basmati are popular choices. Farmers should consider factors like soil type and climate when choosing a variety."
        },
        {
            keywords: ['organic farming practices', 'benefits', 'pest control'],
            response: "Organic farming practices have gained popularity among Indian village farmers. Benefits include healthier soil, reduced chemical exposure, and better sustainability. For pest control, neem-based products and biopesticides are preferred."
        },
        {
            keywords: ['fertilizer', 'NPK ratio', 'soil testing'],
            response: "Using the right fertilizer with the appropriate NPK (Nitrogen, Phosphorus, Potassium) ratio is crucial. Soil testing helps determine nutrient deficiencies. For example, paddy crops benefit from higher nitrogen levels."
        },
        {
            keywords: ['pest control', 'tomato farming', 'natural methods', 'disease prevention'],
            response: "Tomato farming often faces pest and disease challenges. Indian farmers use natural methods like companion planting and neem oil sprays to control pests. Crop rotation can also help prevent diseases."
        },
        {
            keywords: ['mango cultivation', 'pruning', 'yield improvement'],
            response: "Mango cultivation requires proper pruning for yield improvement. Pruning helps remove dead or overgrown branches, promoting healthy growth and better fruit production."
        },
        {
            keywords: ['cotton farming', 'weeding methods', 'organic options'],
            response: "In cotton farming, controlling weeds is essential. Indian village farmers employ methods like intercropping and mulching. Organic weed control options include using organic mulches and hand weeding."
        },
        {
            keywords: ['potato', 'farming', 'storage techniques', 'sprouting'],
            response: "After potato farming, proper storage is crucial to prevent sprouting. Indian farmers store potatoes in well-ventilated, dark places at cool temperatures. This helps in preserving the quality of the crop."
        },
        {
            keywords: ['natural pesticide', 'cabbage', 'homemade solutions', 'preventing pests'],
            response: "Cabbage farming often faces pest issues. Indian village farmers use natural pesticides like a mixture of garlic and chili spray to prevent pests. Regular monitoring and early intervention are key to preventing infestations."
        },
        //new
        {
            keywords: ['wheat farming', 'irrigation', 'fertilization'],
            response: "Wheat farming requires moderate but consistent irrigation. Water the crop at critical stages such as tillering and booting. When fertilizing, pay attention to nitrogen content, especially at the early growth stages."
        },
        {
            keywords: ['onion cultivation', 'soil type', 'spacing'],
            response: "Onion cultivation in Indian villages is successful in well-draining sandy loam soil. Proper spacing of bulbs ensures good bulb development. Maintain a distance of 10-15 cm between bulbs."
        },
        {
            keywords: ['maize', 'harvest', 'time', 'storage'],
            response: "Maize should be harvested when the grains are fully mature and hard. Store the harvested maize in well-ventilated containers or silos to protect against moisture and pests."
        },
        {
            keywords: ['pomegranate cultivation', 'pruning', 'training'],
            response: "Pruning and training are essential for pomegranate plants. Regularly remove dead branches and prune for shape and size. Training the plants to a single stem is common for better fruiting."
        },
        {
            keywords: ['natural pest control for chili', 'aphids', 'caterpillars'],
            response: "To control aphids and caterpillars in chili plants, neem oil sprays or soapy water solutions can be effective. Introducing ladybugs also helps control aphids naturally."
        },
        {
            keywords: ['organic fertilizers', 'use', 'benefits'],
            response: "The use of organic fertilizers like compost, vermicompost, and biofertilizers is beneficial for soil health. Organic fertilizers improve soil structure, fertility, and water retention."
        },
        {
            keywords: ['pea farming', 'pesticide', 'weevil', 'measures'],
            response: "For preventing weevils in pea farming, storing the peas in a cool, dry place with low humidity is effective. Additionally, using diatomaceous earth around storage containers helps control weevils naturally."
        },
        {
            keywords: ['banana farming', 'pollination', 'fruit setting'],
            response: "Banana plants are generally self-pollinating, but facilitating cross-pollination by wind can improve fruit setting. Consider providing shelter from strong winds for better fruit yield."
        },
        //new
        {
            keywords: ['land', 'prepare', 'plowing', 'cultivation', 'sow'],
            response: "Before sowing seeds, land preparation involves plowing the soil to loosen it and remove weeds. Cultivation follows to prepare a suitable bed for seeds or seedlings."
        },
        {
            keywords: ['seed', 'select', 'crop', 'variety', 'quality', 'factors'],
            response: "Select seeds based on crop varieties suitable for the region and climate. Ensure seed quality, looking for factors such as purity, germination rate, and disease resistance."
        },
        {
            keywords: ['sowing', 'techniques', 'depth', 'spacing'],
            response: "When sowing seeds, ensure the right depth and spacing. This is crucial for optimal growth and development of crops."
        },
        {
            keywords: ['fertilizer', 'application', 'types', 'quantity'],
            response: "Use organic or inorganic fertilizers as needed based on soil test results. Apply fertilizers in appropriate quantities and at the right time for optimal growth."
        },
        {
            keywords: ['irrigation', 'methods', 'water', 'schedule', 'conservation'],
            response: "Adopt suitable irrigation methods and a watering schedule based on the crop's water needs. Implement water conservation practices to use water efficiently."
        },
        {
            keywords: ['pest', 'identify', 'natural', 'control', 'chemical', 'control'],
            response: "Identify pests and adopt pest control measures. Use natural methods like neem oil and ladybugs whenever possible before considering chemical controls."
        },
        {
            keywords: ['crop', 'growth', 'monitoring', 'signs', 'troubleshooting'],
            response: "Regularly monitor crops for signs of growth, health, and any issues. Troubleshoot any problems promptly to avoid extensive damage to crops."
        },
        {
            keywords: ['harvest', 'time', 'ripe', 'proper', 'techniques'],
            response: "Determine the right time to harvest crops by assessing ripeness. Employ proper techniques to ensure successful and efficient harvesting."
        }

        // Add more keyword-response pairs here
    ];

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSendMessage();
        }
    };

    return (
        <>

            <div className="chatbot">
                {isChatOpen ? (
                    <div className="chatbot-window">
                        <div className="chatbot-header">
                            <span>Assistant</span>
                            <button className="close-button" onClick={toggleChat}>
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                        <div className="chatbot-messages">
                            {messages.map((message, index) => (
                                <div className='message'>
                                    <div className='message-right'> {message.query}</div>
                                    <div className='message-left'> {message.response}</div>
                                </div>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Type a query..."
                                value={inputText}
                                onChange={handleInputChange}
                                onKeyDown={handleKeypress}
                            />
                            <button onClick={handleSendMessage} >Send</button>
                        </div>
                    </div>
                ) : (
                    <button className="chatbot-button" onClick={toggleChat} style={{ backgroundColor: '#38A755' }}>
                        <i className="material-icons">chat</i>
                    </button>
                )
                }
            </div >
        </>
    );
};

export default Chatbot;
