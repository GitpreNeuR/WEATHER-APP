import React,{useEffect, useState} from 'react'
import './style.css'


const Weather = () => {

//city is the initial value and setCity is the updated value

const [city,setCity]=useState(null);

const [search, setSearch]=useState();


//wheneve use fat arrow function , first define the function and then call it at the last
useEffect(()=>{

    const fetchApi=async()=>{

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=880319e27a8c41ff150bb3749248285d`;
        const response=await fetch(url);

       // console.log(response);

       const responseJson= await response.json();
       //console.log(responseJson);

       setCity(responseJson.main);

    }

    fetchApi();

},[search])

  return (
      <>
    <div className="box">
        <div className="inputData">
            <input type="search" className='inputField' defaultValue="" onChange={(event)=>{

                setSearch(event.target.value)

            }} />


            
        </div>
        {
            !city ? (
                <>
                <span><i className="fa-solid fa-street-view"></i></span>
                <p className="para">DATA NOT FOUND</p>
                <div className='wave1'></div>
    <div className='wave2'></div>
    <div className='wave3'></div>
    </>
            ):(
                <>
                <div className="info">

<h2 className="icon" style={{textAlign:'center'}}><span className="span2">
<i className="fa-solid fa-street-view"></i></span>{search}</h2>


<h1 className="temp" style={{position:'relative',textAlign:'center'}}>{city.temp}°Cel</h1>
<h3 className="tempmin_max" style={{margin:'15px'}}>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>

</div>

    

    <div className='wave1'></div>
    <div className='wave2'></div>
    <div className='wave3'></div>
    

                </>
            )
        }

</div>
    </>
  )
}

export default Weather