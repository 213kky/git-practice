import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";


export default function Day() {

    const a = useParams();
    const day = a.day;
    const wordlist = dummy.words.filter(word => ( word.day === Number(day)))
    console.log(wordlist);

    
    console.log(a);


    return (
        <>
        <h2>Day{day}</h2>
            <table>
                <tbody>
                    {wordlist.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>


    )

}