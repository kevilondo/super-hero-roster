import '../style.css';

function Hero(props) {

  return (
    <div className="column">
      {
        props.heros.map(hero => (
          <div className="row">
            <div className="col-md-5">
              <div className="hero-card">
                <h3>{hero.name}</h3>
                  <img src={hero.image.url} width="100%" height="40%" alt={hero.name}/>
                <div className="stats">
                  <ul>
                    <p className="attribute-group"> <span className="attribute"> Combat: </span> <span className={`attribute-value ${hero.powerstats.combat >= 50 ? "green" : "red"}`}> {hero.powerstats.combat !== "null" ? hero.powerstats.combat : 0} </span> </p> 
                    <p className="attribute-group"> <span className="attribute"> Durability: </span> <span className={`attribute-value ${hero.powerstats.durability >= 50 ? "green" : "red"}`}> {hero.powerstats.durability !== "null" ? hero.powerstats.durability : 0} </span> </p>
                    <p className="attribute-group"> <span className="attribute"> Intelligence: </span> <span className={`attribute-value ${hero.powerstats.intelligence >= 50 ? "green" : "red"}`}> {hero.powerstats.intelligence !== "null" ? hero.powerstats.intelligence : 0} </span> </p>
                    <p className="attribute-group"> <span className="attribute"> Power: </span> <span className={`attribute-value ${hero.powerstats.power >= 50 ? "green" : "red"}`}> {hero.powerstats.power !== "null" ? hero.powerstats.power : 0} </span> </p>
                    <p className="attribute-group"> <span className="attribute"> Speed: </span> <span className={`attribute-value ${hero.powerstats.speed >= 50 ? "green" : "red"}`}> {hero.powerstats.speed !== "null" ? hero.powerstats.speed : 0} </span></p>
                    <p className="attribute-group"> <span className="attribute"> Strength: </span> <span className={`attribute-value ${hero.powerstats.strength >= 50 ? "green" : "red"}`}> {hero.powerstats.strength !== "null" ? hero.powerstats.strength : 0} </span></p>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="row">
                <div className="biography container">
                  <h3 className="title">Biography</h3>
                  <p> <span className="attribute"> Full name: </span> <span className="attribute-bio"> {hero.biography["full-name"]} </span> </p>
                  <p> <span className="attribute"> Aliases: </span> <span className="attribute-bio"> {hero.biography.aliases.join(', ')} </span> </p>
                  <p> <span className="attribute"> Alignment: </span> <span className="attribute-bio"> {hero.biography.alignment} </span> </p>
                  <p> <span className="attribute"> Alter Ego: </span> <span className="attribute-bio"> {hero.biography["alter-egos"]} </span> </p>
                  <p> <span className="attribute"> Base: </span> <span className="attribute-bio"> {hero.work.base} </span> </p>
                  <p> <span className="attribute"> Occupation: </span> <span className="attribute-bio"> {hero.work.occupation} </span> </p>
                  <p> <span className="attribute"> Affiliation: </span> <span className="attribute-bio"> {hero.connections['group-affiliation']} </span> </p>
                  <p> <span className="attribute"> Relatives: </span> <span className="attribute-bio"> {hero.connections.relatives} </span> </p>
                  <p> <span className="attribute"> First appearance: </span> <span className="attribute-bio"> {hero.biography["first-appearance"]} </span> </p>
                  <p> <span className="attribute"> Place of birth: </span> <span className="attribute-bio"> {hero.biography["place-of-birth"]} </span> </p>
                  <p> <span className="attribute"> Publisher: </span> <span className="attribute-bio"> {hero.biography["publisher"]} </span> </p>

                </div>

                <div className="biography container">
                  <h3 className="title">Appearance</h3>
                  <p> <span className="attribute"> Eye color: </span> <span className="attribute-bio"> {hero.appearance['eye-color']} </span> </p>
                  <p> <span className="attribute"> Gender: </span> <span className="attribute-bio"> {hero.appearance.gender} </span> </p>
                  <p> <span className="attribute"> Hair color: </span> <span className="attribute-bio"> {hero.appearance['hair-color']} </span> </p>
                  <p> <span className="attribute"> Height: </span> <span className="attribute-bio"> {hero.appearance.height.join(', ')} </span> </p>
                  <p> <span className="attribute"> Race: </span> <span className="attribute-bio"> {hero.appearance.race} </span> </p>
                  <p> <span className="attribute"> Weight: </span> <span className="attribute-bio"> {hero.appearance.weight.join(', ')} </span> </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
      
  );
  }
  
  export default Hero;