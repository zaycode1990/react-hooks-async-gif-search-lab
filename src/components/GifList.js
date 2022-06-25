import React from 'react'

function GifList({gifs}) {

    console.log(gifs)

    const gifMargin = {
        margin: '1%'
    }
    const gifList = gifs.map((gif)=> 
    <li style={gifMargin} key={gif.id}>
        <img alt='random gif' src={gif.images.original.url}/>
    </li>
    )


  return (
    <ul>
        {gifs === [] ? <h1>No Gifs To Display!</h1> : gifList}
    </ul>
  )
}

export default GifList