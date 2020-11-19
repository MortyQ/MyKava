import React,{useState}  from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react';

const Map =({stateNav})=>{

    const [state, setState] =useState({
        center: {
            lat: 50.033556,
            lng: 36.218064
          },
          zoom: 17
});
    
    
    const hide = ()=>{
        stateNav({
            Map: false,
        })
    }
    const buttonesc = (<div className='buttonesc'><button onClick={hide} >X</button></div>)

    //Ready Google Map AAAAA

    return(
        <div className="main_body_block">
                {buttonesc}
                <div className="map_final">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias similique laboriosam accusantium minus consequuntur quos ducimus temporibus optio sapiente nihil provident sed iure, consectetur esse!</p>
                    

                    <div className='google_map' style={{ height: '50vh', width: '95%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeiAZ90zeJyjEzvzbxYiEqeXhUlSzCQpE'}}
          defaultCenter={state.center}
          defaultZoom={state.zoom}
        >
          
        </GoogleMapReact>
      </div>




                </div>
        </div>
    )
}

export default Map;