import React, { useState } from 'react'

const ToogleExample = () => {

const[isToogled,setToogled]=useState(false)

const toogleHandles=()=>{
    setToogled(!isToogled)
}



  return (
   <div>
    <h1>es u toogle</h1>
    <button onClick={toogleHandles}>
        {isToogled ? 'Apagar':'Encender'}
    </button>

    {isToogled ? <p>Esta encendido</p>:<p>esta apagado</p>}
   </div>
  )
}

export default ToogleExample