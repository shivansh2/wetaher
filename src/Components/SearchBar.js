import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
  padding: 10px;
  width: 100%; /* Adjust this width as needed */
  max-width: 800px; /* Set a maximum width if desired */
  margin: 0 auto;
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
`;

const FormControl = styled.input`
  width: calc(100% - 40px);
  height: 40px;
  text-indent: 10px;
  border: 2px solid #cdd7e7;
  padding-right: 40px;
  margin-right: 10px;

  &:focus {
    box-shadow: none;
    border: 2px solid #929292;
  }
`;

const MicrophoneIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
  color: #cdd7e7;

  &::before {
    content: "\f130"; /* Microphone icon unicode */
    border: 1px solid black; /* Change border color to black */
    border-radius: 50%; /* Make the border circular */
    padding: 5px; /* Increase padding to expand the icon */
    display: inline-block;
    background-color: transparent; /* Set background to transparent */
  }
`;

const SearchButton = styled.button`
  height: 40px;
  padding: 0 20px;
  background: blue;
  color: #cdd7e7;
  border: none;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("Delhi");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleMicrophoneClick = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript); // Set recognized speech to searchQuery
      };
  
      recognition.start(); // Start speech recognition
  
      // Automatically stop after 10 seconds
      setTimeout(() => {
        recognition.stop(); // Stop speech recognition after 10 seconds
        console.log("Microphone stopped after 10 seconds");
      }, 7000); // 10 seconds in milliseconds (1000ms = 1 second)
    } else {
      console.error('SpeechRecognition API not supported in this browser');
      // Handle the case where SpeechRecognition is not available
    }
  };
  

  return (
    <SearchContainer>
      <SearchInputContainer>
        <FormControl
          type="text"
          placeholder="Have a question? Ask Now"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <MicrophoneIcon className="fa fa-microphone" onClick={handleMicrophoneClick} />
      </SearchInputContainer>
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;

