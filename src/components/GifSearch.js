import React, {useState} from 'react'

function GifSearch({handleSubmit}) {
const divStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%"

}
    const [search, setSearch] = useState('')

  return (
    <div style={divStyle}>
     <form onSubmit={e=> {
         e.preventDefault()
         handleSubmit(search)
         setSearch('')
     }}>
         <input type='text' placeholder='search gif' value={search}
     onChange={e=>setSearch(e.target.value)}/>
         
        <input type='submit' value="Find Gifs"/>
        
    </form>   
    </div>
  )
}

export default GifSearch