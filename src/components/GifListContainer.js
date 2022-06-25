import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {

    const [gifs, setGifs] = useState([])

    const  apiKey = '43yMLbYDOSKCnrtqiC40CZjYX8QeFTNX'
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`)
        .then(res => res.json())
        .then(obj => setGifs(obj.data.slice(0,3))
        )
    },[])
   console.log(gifs)

   function handleSubmit(search) {
       fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
       .then(r=>r.json())
       .then(obj => setGifs(obj.data.slice(0,3)))
   }

  return (
    <>
    <GifList gifs={gifs}/>
    <GifSearch handleSubmit={handleSubmit}/>
    </>
  )
}

export default GifListContainer