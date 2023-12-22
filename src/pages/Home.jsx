import { useDispatch } from "react-redux";
import { useLearnedWordsSelector, useWordsSelector } from "../store/words/selectors"
import { markWord } from "../store/words/action";

export const Home = () => {
    const allWords = useWordsSelector();
    const dispatch = useDispatch();
    const learnWords = useLearnedWordsSelector();

    console.log(allWords)
    console.log(learnWords)
    const onClick = (word) => () => {
        const action = markWord(word);
        dispatch(action)
    }
    return <div>
        <ol>
          {allWords.map((word, index) =>(
            <li key={index} onClick={onClick}>{word}</li>
          ))} 
        </ol>
        
        <p>learned words</p>
        <ul>
            {learnWords?.map((word) => {
                <li key={word}>{word}</li>
            })}
        </ul>
    </div>
}