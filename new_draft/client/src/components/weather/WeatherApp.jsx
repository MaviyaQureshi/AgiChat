import React, { useState, useEffect } from "react";
import WeatherInputForm from "./WeatherInputForm";
import WeatherCard from "./WeatherCard";

function WeatherApp() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleFormSubmit = (country, city) => {
        setSelectedCountry(country);
        setSelectedCity(city);
    };

    return (
        <>
            <div className="App">
                <WeatherInputForm onFormSubmit={handleFormSubmit} />
                {selectedCountry && selectedCity && (
                    <WeatherCard country={selectedCountry} city={selectedCity} />
                )}
            </div>
        </>
    );
}

export default WeatherApp;
