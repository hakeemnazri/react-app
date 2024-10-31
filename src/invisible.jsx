import React, {useState} from 'react'

function Invisible(){
    const[invisible, setInvisible] = useState(false);

    function handleInvisible(){
        setInvisible(!invisible)
    }

    return(
        <div>
        <button onClick={handleInvisible}>{invisible ? 'Hide Text' : 'Visible Text' }</button>
        {invisible && <p>you found me!</p>}
        </div>
    )
}

export default Invisible;