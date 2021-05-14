import React, { useEffect ,useState} from "react";
import './covid.css';

function Home() {
  const [data,setData]=useState([]);
 const getCovidData =async()=>{
   try{
    const res=await fetch('https://api.covid19india.org/data.json');
    const actualData=await res.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
   }
   catch(err)
   {
     console.log("Error");
   }
   
 }

  useEffect(()=>{
    getCovidData();
  },[]);

  return (
    <section>
    <div style={{backgroundColor:"black"}}>
      <center>
      <h2 style={{color:"white"}}>🔴 LIVE</h2>
    <h1 style={{color:"white"}}>Covid-19 CoronaVirus Tracker</h1>
    <ul>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Our</span>Country</p>
            <p className="card__total card__small">India</p>
          </div>
        </div>
      </li>
      
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Recovered</p>
            <p className="card__total card__small">{data.recovered}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Confirmed</p>
            <p className="card__total card__small">{data.confirmed}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Deaths</p>
            <p className="card__total card__small">{data.deaths}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Active</p>
            <p className="card__total card__small">{data.active}</p>
          </div>
        </div>
      </li>
      {/* <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Delta Confirmed</p>
            <p className="card__total card__small">{data.deltaconfirmed}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Total</span>Delta Recovered</p>
            <p className="card__total card__small">{data.deltarecovered}</p>
          </div>
        </div>
      </li> */}
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span>Last</span>Updated</p>
            <p className="card__total card__small">{data.lastupdatedtime}</p>
          </div>
        </div>
      </li>
      
    </ul>
    </center>
    </div>
    </section>
  );
}

export default Home;
