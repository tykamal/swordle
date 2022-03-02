const Syllable = ({ letter,found, pos, wordcomplete, todayWordLetterOne, todayWordLetterTwo, todayWordLetterThree, todayWordLetterFour, todayWordLetterFive, attempt, repeating }) => {
    return (
        <div
            className={`w-11 h-11 rounded-sm 
                ${(wordcomplete > 0 || found === 1 || attempt > 0) &&
                    ((todayWordLetterOne === letter.toLowerCase() && (pos === 0 || pos === 5 || pos === 10 || pos === 15 || pos === 20 || pos === 25)) ||
                    (todayWordLetterTwo === letter.toLowerCase() && (pos === 1 || pos === 6 || pos === 11 || pos === 16 || pos === 21 || pos === 26)) || 
                    (todayWordLetterThree === letter.toLowerCase() && (pos === 2 || pos === 7 || pos === 12 || pos === 17 || pos === 22 || pos === 27)) ||
                    (todayWordLetterFour === letter.toLowerCase() && (pos === 3 || pos === 8 || pos === 13 || pos === 18 || pos === 23 || pos === 28)) ||
                    (todayWordLetterFive === letter.toLowerCase() && (pos === 4 || pos === 9 || pos === 14 || pos === 19 || pos === 24 || pos === 29))) &&
                    letter !== "" ? "bg-lime-600 text-white" :
                (wordcomplete > 0 || found === 1 || attempt > 0) &&
                    (((todayWordLetterOne === letter.toLowerCase()  || repeating.includes(letter.toLowerCase())) && ((pos !== 0 ) || (pos !== 5 ) || (pos !== 10) || (pos !== 15) || (pos !== 20) || (pos !== 25))) || 
                    ((todayWordLetterTwo === letter.toLowerCase() || repeating.includes(letter.toLowerCase())) && ((pos !== 1) || (pos !== 6 ) || (pos !== 11 ) || (pos !== 16) || (pos !== 21) || (pos !== 26))) || 
                    ((todayWordLetterThree === letter.toLowerCase() || repeating.includes(letter.toLowerCase())) && ((pos !== 2) || (pos !== 7) || (pos !== 12) || (pos !== 17) || (pos !== 22) || (pos !== 27))) ||
                    ((todayWordLetterFour === letter.toLowerCase() || repeating.includes(letter.toLowerCase())) && ((pos !== 3) || (pos !== 8) || (pos !== 13) || (pos !== 18) || (pos !== 23) || (pos !== 28))) ||
                    ((todayWordLetterFive === letter.toLowerCase() || repeating.includes(letter.toLowerCase())) && ((pos !== 4) || (pos !== 9) || (pos !== 14) || (pos !== 19) || (pos !== 24) || (pos !== 29)))) &&
                    letter !== "" ? "bg-amber-500 text-white" :
                        (wordcomplete > 0 || found === 1) && letter !== "" ? "bg-zinc-400 text-white" : "border-2"} `}>
            <p className="font-semibold text-xl text-center mt-2">
                {letter}
            </p>
        </div>
    )
}
export default Syllable