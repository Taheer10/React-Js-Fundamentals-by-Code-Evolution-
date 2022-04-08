import React from 'react'

function ErrorHeroBoundary({heroName}) {
    if(heroName==="JokerSalman"){
          throw new Error('Not just a joker. Deer Killer as well')
    }

  return (
    <div>{heroName}</div>
  )
}

export default ErrorHeroBoundary