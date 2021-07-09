import React,{useContext} from 'react'
import './Home.css'
import ListContext from '../Context/Context'

function Home() {
    const [List] = useContext(ListContext)
    
    return (
        <div className="App"> 
    
        <ul className="grid_list">
        {List.map ( List => {
                return (<li >{List.name}</li>
        )}
      )
    }
</ul>
        
        </div>
        
   
    )
}

export default Home
