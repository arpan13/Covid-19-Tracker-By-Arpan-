import React, { useState, useEffect }from "react";
import Card from "./cards";
import Header from "./header";
import Footer from "./footer";
import { Component } from "react";
import { render } from "react-dom";
import Graph from "./graph";
import GraphMap from "./graphByCases";


// class App extends Component{

//   state={
//       coviddataIndia:[]
//   }
//   componentDidMount(){
//       fetch("https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query")
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({ coviddataIndia: data })
//       })
//       .catch(console.log)
//   }

// }

    //  render( 
    //     <Card coviddataIndia={this.state.coviddataIndia} />,document.getElementById("root")
    //  );
 



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

    // const [India]=coviddataIndia;
    // const {countryInfo:{flag:source}}=India
    // console.log(coviddataIndia);
    // const {countryInfo}=coviddataIndia;
    // const {_id}=countryInfo;
    // console.log(_id);
    
    
    

   
    
   
    
    
    


    

    // console.log(array[0].countryInfo.flag);
    
   
   
    
    // function creataCard(coviddataIndia){
    //   return (  <Card 
    //         imageflag="https://disease.sh/assets/img/flags/in.png"
    //         countryName={coviddataIndia.country}
    //         confirmed={coviddataIndia.cases}
    //         recoverd={coviddataIndia.recovered}
    //         deaths={coviddataIndia.deaths}
    //         />)
    // }
    
    
      
    
      
      
    


  return (
      <div>
         <Header />
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
            <Card />
            <Graph />
            <GraphMap />
           
            </div>
            
          {/* <Footer /> */}
          
      </div>
      
          
  )
}

export default App;