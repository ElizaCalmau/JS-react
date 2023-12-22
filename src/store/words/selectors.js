import { useSelector } from 'react-redux';

export const useWordsSelector = () => {
   return useSelector((store) => store.words)
}

export const useLearnedWordsSelector = () => {
   return useSelector((store) => store.learned)
}

