import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import {  Spinner } from 'react-bootstrap';

function App() {

  const[hero, setHero] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(hero)
  })

  //stop the form from submitting and process the form
  const handleSubmit = (e) => {
    e.preventDefault();

    //clear the state when the user searches a new hero
    setHero([]);

    var hero_name = document.getElementById('hero_name').value;

    //headers for the request
    const headers = {
      'Content-Type': 'text/plain',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, OPTIONS, X-Requested-With, Content-Type, Accept'
    }

    if (hero_name.length !== 0)
    {
      //set the loader to true when the user clicks
      setLoading(true)

      const sendGetRequest = async () => {
        try {
          await axios
            .get("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/4969844879755361/search/"+hero_name, headers)
            .then(res => {
              res.data.results.map(character => {
                setHero(hero => [...hero, character])
              })
              setLoading(false) 
            })          

        } catch (exception) {
          alert("No result found, check the spelling and try again")
          setLoading(false)
        }

      }
        sendGetRequest();         
    }
    else
    {
      alert("Enter a character name");
    }

  }
  

  return (
    <div className="App">
      <Header />

      <div className="App-container container">
        <div className="col-md-12">
          <form className="form-inline" id="search" onSubmit={handleSubmit}>
            <div className="form-group col-md-12">
              <input type="text" id="hero_name" className="form-control" placeholder="Enter a character's name"/>
              <button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </form>
          <div className="container">
            <div className="col-md-12">
              
              {!loading ? <Hero heros={hero} /> : (
                <Spinner animation="border" variant="info" />
              )}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
