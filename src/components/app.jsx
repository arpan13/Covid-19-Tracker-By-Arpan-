import React, { useState, useEffect }from "react";
import Card from "./cards";
import Header from "./header";
import Footer from "./footer";


 


 



function App(){

    const [coviddataIndia,addDataIndia]=useState({countryInfo:""});
    const [coviddataUSA,addDataUSA]=useState({countryInfo:""});
    const [coviddataChina,addDataChina]=useState({countryInfo:""});

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query")
            .then(response => response.json())
            .then(data => addDataIndia(data
            
            ));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://corona.lmao.ninja/v2/countries/USA?yesterday&strict&query")
            .then(response => response.json())
            .then(data => addDataUSA(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
   
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://corona.lmao.ninja/v2/countries/China?yesterday&strict&query")
            .then(response => response.json())
            .then(data => addDataChina(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

   
     return (
         <div>
              <div className="container">
                    <div className="row ">
                      <div className="col-lg heading"><Header /></div>
                    </div>
                    <div className="row">
                        <div className="dictionary"> 
                            {/* {coviddataIndia.map(creataCard)} */}
                            <Card 
                            imageflag={coviddataIndia.countryInfo.flag}
                            countryName={coviddataIndia.country}
                            confirmed={coviddataIndia.cases}
                            recoverd={coviddataIndia.recovered}
                            deaths={coviddataIndia.deaths}
                            />
                            <Card 
                            imageflag={coviddataUSA.countryInfo.flag}
                            countryName={coviddataUSA.country}
                            confirmed={coviddataUSA.cases}
                            recoverd={coviddataUSA.recovered}
                            deaths={coviddataUSA.deaths}
                            />
                            <Card 
                            imageflag={coviddataChina.countryInfo.flag}
                            countryName={coviddataChina.country}
                            confirmed={coviddataChina.cases}
                            recoverd={coviddataChina.recovered}
                            deaths={coviddataChina.deaths}
                            />
                        
                            
                        
                            </div>
                    </div>
                    <div class="row">
                        
                        <div class="flourish-embed flourish-chart  col-lg-6 " data-src="story/230114">
                        </div>
                        <div class="flourish-embed flourish-map  col-lg-6 " data-src="story/229998">
                        </div>
                        
                                    
                    </div>
                </div>
                <div className="container-fluid">
                   <h1 className="videoh1">Some videos to watch</h1>
                   <div className="row video ">
                        <div className="col-md-6">
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/W-zhhSQDD1U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/TjcoN9Aek24" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        

                   </div>

                </div>
                
     
         </div>
         
      
    
      
          
  )
}

export default App;