import React, {useState} from 'react'

function CharacterCounter(){
    const [inputValue, setInputValue] = useState('');
    const maxCount = 50;
    
    const handleInput = (event) =>{
        setInputValue(event.target.value)
    }

    return(
        <div>
            <input
            type ='text'
            value ={inputValue}
            onChange = {handleInput}
            />
            <p> your count now is {inputValue.length} : {maxCount}</p>
            {inputValue.length > maxCount && 
            (<p style={{color: 'red'}}>You are exceeding the allowable amount!</p>)
            }
        </div>
    )
}

export default CharacterCounter