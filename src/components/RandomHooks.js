import { useEffect, useState } from "react";

const RandomHooks = (props) => {
  //Pull list of words from api
  const [adjectives, setAdjectives] = useState([]);
  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [adverbs, setAdverbs] = useState([]);

  //Create an array of random words
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=100")
      .then((response) => response.json())
      .then((data) => setAdjectives(data));
    fetch("https://random-word-api.herokuapp.com/word?number=100")
      .then((response) => response.json())
      .then((data) => setNouns(data));
    fetch("https://random-word-api.herokuapp.com/word?number=100")
      .then((response) => response.json())
      .then((data) => setVerbs(data));
    fetch("https://random-word-api.herokuapp.com/word?number=100")
      .then((response) => response.json())
      .then((data) => setAdverbs(data));
  }, []);

  //Generate random word
  const randomWord = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  //Generate random sentence
  const randomSentence = () => {
    let sentence = "";
    const numWords = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < numWords; i++) {
      if (i === 0) {
        sentence += randomWord(adjectives);
      } else if (i === 1) {
        sentence += " " + randomWord(nouns);
      } else if (i === 2) {
        sentence += " " + randomWord(verbs);
      } else if (i === 3) {
        sentence += " " + randomWord(adverbs);
      } else {
        sentence += " " + randomWord(adjectives);
      }
    }
    return sentence;
  };

  //Generate random sentences
  const randomSentences = () => {
    let sentences = [];
    const numSentences = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < numSentences; i++) {
      sentences.push(randomSentence());
    }
    return sentences;
  };

  //Generate random paragraphs
  const randomParagraphs = () => {
    let paragraphs = [];
    const numParagraphs = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < numParagraphs;
        i++) {
        paragraphs.push(randomSentences());

    }
    return paragraphs;
}

  
    return (
        <div>
            <h1>Random Hooks</h1>
            <button onClick={() => setRandomWords(randomParagraphs())}>Generate Random Paragraphs</button>
            <ul>
                {randomWords.map((paragraph, index) => (
                    <li key={index}>
                        {paragraph.map((sentence, index) => (
                            <p key={index}>{sentence}</p>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default RandomHooks;
