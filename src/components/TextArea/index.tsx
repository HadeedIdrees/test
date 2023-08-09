import { useState } from 'react'
import './index.scss'
import ResultBox from '../ResultBox';

interface ResultObject {
  
    title: string;
    value: number,
  
}


const TextArea = () => {
  const [text,setText]=useState('');
  const [numberOfWord,setNumberOfWord]=useState(0);
  const [numberofcharacter,setNumberOfCharacter]=useState(0);
  const [numberofsentence,setNumberOfSentence]=useState(0);
  const [numberofparagraph,setNumberOfParagraph]=useState(0);
  const [numberofpronoun,SetNumberOfPronouns]=useState(0);

  const [result,setResult]=useState<ResultObject[]>([]);
  const [longestWord,setLongetsWord]=useState(0);

  const pronounsList=['i','he','she','they','it','we','you','him','her','them','us'];

  const count=()=>{
    console.log("in count");
    
    var words = text.trim().split(' ');
    var wordsCount = words.length;

    var character = text.trim().length;
    var sentence = text.trim().split(/[.!?]/).length;
    var paragraph = text.trim().split('\n\n').length;

    let longestword=''
    words.forEach(word => {
      if(word.length>longestword.length){
        longestword=word
      }
    });

  const pronouns= pronounsList.join('|');
  const pronounRegex=new RegExp(`\\b(${pronouns})\\b`,'gi')
  const pronounCountResult=(text.match(pronounRegex)||[]).length

  
      let tempresult=[
      {
        title: 'Words',
        value: wordsCount,
      },
      {
        title: 'Characters',
        value: character,
      },
      {
        title: 'Sentences',
        value: sentence,
      },
      {
        title: 'Paragraphs ',
        value: paragraph,
      },
      {
        title: 'Pronouns',
        value: pronounCountResult,
      },
    ]

      setResult(tempresult)

    console.log({words,character,sentence,paragraph})
  }


  // console.log(text);
  
  return (
    <>
    
    <ResultBox result={result}/>
    <textarea className="text-area" placeholder="Paste your text here..." value={text} onChange={(e)=>{
    setText(e.target.value);
    count();
    }} />
    </>
  )
}

export default TextArea
