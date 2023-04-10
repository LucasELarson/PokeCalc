
import React, { useState, useEffect } from "react"

const Body = () => {
   const [posts, setPosts] =  useState([]);
   
   const weaknessArr = [];
   const strengthsArr = [];
   const weaknessAggArr = [ ["normal", 0, '#A8A77A'], ["fire", 0, '#EE8130'], ["water", 0, "#6390F0"], ["grass", 0, "#7AC74C"], ["electric", 0, "#F7D02C"], ["ice", 0, "#96D9D6"], ["fighting", 0, "#C22E28"], ["poison", 0, "#A33EA1"], ["ground", 0, "#E2BF65"], ["flying", 0, "#A98FF3"], ["psychic", 0, "#F95587"], ["bug", 0, "#A6B91A"], ["rock", 0, "#B6A136"], ["ghost", 0, "#735797"], ["dark", 0, "#705746"], ["dragon", 0, "#6F35FC"], ["steel", 0, "#B7B7CE"], ["fairy", 0, "#D685AD"]];
   
   const pokemonNameList = [];
   
   // POPULATES THE DROP DOWN MENUES ALPHABETICALLY // //LAUNCHING TWICE //
   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1261')
      .then((response) => response.json())
      .then((data) => {
         data.results.forEach(element => {
            pokemonNameList.push(element.name)           
         });
         const sortedNames = pokemonNameList.sort((a,b) => {
            if(a === b)
               return 0;
            if(a < b)
               return -1
            return 1
         });
         for(let i = 1; i <=6; i ++){
            sortedNames.forEach(element => {
               const name = document.createElement('option')
               name.value = element
               name.innerHTML = element
               document.getElementById(`pokemon${i}`).appendChild(name)
            });
         }     
      })
   }, [])

   const getData = () =>{
      const pokemonNames = [];
      const pokemonName1 = document.getElementById('pokemon1').value
      const pokemonName2 = document.getElementById("pokemon2").value
      const pokemonName3 = document.getElementById("pokemon3").value
      const pokemonName4 = document.getElementById("pokemon4").value
      const pokemonName5 = document.getElementById("pokemon5").value
      const pokemonName6 = document.getElementById("pokemon6").value
      pokemonNames.push(pokemonName1)
      pokemonNames.push(pokemonName2)
      pokemonNames.push(pokemonName3)
      pokemonNames.push(pokemonName4)
      pokemonNames.push(pokemonName5)
      pokemonNames.push(pokemonName6)

      // SETS ICON NEXT TO SELECTED POKEMON //
      for(let q = 1; q <= 6; q++){
         const iconName = document.getElementById(`pokemon${q}`).value
      fetch(`https://pokeapi.co/api/v2/pokemon/${iconName}`)
      .then((response) => response.json())
      .then((data) => {
               const icon = document.getElementById(`pokemonIcon${q}`)
               icon.src = data.sprites.front_default         
      })
      .catch((err) => {
         console.log(err.message)
      })
      }
      
      // GETS DATA ABOUT WEAKNESSES AND THEN CALCULATES AND DISPLAYS WEAKNESSES
      pokemonNames.forEach(poke => {
         fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
         .then((response) => response.json())
         .then((data) => {   
            fetch(data.types[0].type.url)
               .then((response) => response.json())
               .then((data) => {
                  const weaknesses = data.damage_relations.double_damage_from
                  weaknesses.forEach(element => {                     
                     weaknessAggArr.forEach(type => {
                        if(type[0] === element.name){
                           type[1] += 2;
                        }
                     });
                     weaknessArr.push(element.name)                   
                  });
                  const strengths = data.damage_relations.double_damage_to
                  strengths.forEach(element => {                   
                     strengthsArr.push(element.name)
                  });
               })
               .catch((err) => {
                  console.log(err.message)
               })
            if(!data.types[1]){
               console.log("no second type")
            } else {
               fetch(data.types[1].type.url)
                  .then((response) => response.json())
                  .then((data) => {
                     const weaknesses = data.damage_relations.double_damage_from
                     weaknesses.forEach(element => {                       
                        weaknessAggArr.forEach(type => {
                           if(type[0] === element.name){
                              type[1] += 2;
                           }
                        });  
                        weaknessArr.push(element.name)                           
                     });
                     const strengths = data.damage_relations.double_damage_to
                     strengths.forEach(element => {
                          
                        strengthsArr.push(element.name)
                     });
                  })
                  .catch((err) => {
                     console.log(err.message)
                  })           
            }
            setPosts(data);
         })
         .then(() => {
            setTimeout(() => {
               let x = 1;
               let weaknessAggArrMax = [];           
               weaknessAggArr.forEach(element => {
                  if(element[1] > 0){
                     document.getElementById(`type${x}`).classList.add("visiblegrid")
                     document.getElementById(`type${x}`).classList.remove("typedisplay")
                     document.getElementById(`type${x}`).style.backgroundColor = element[2]
                     document.getElementById(`type${x}`).innerHTML = `${element[0]}  x${element[1]}`
                     weaknessAggArrMax.push(element[1])                   
                  } else {
                     document.getElementById(`type${x}`).classList.add("typedisplay")
                     document.getElementById(`type${x}`).classList.remove("visiblegrid")
                     document.getElementById(`type${x}`).style.backgroundColor = element[2]
                     document.getElementById(`type${x}`).innerHTML = `${element[0]}  x${element[1]}`
                     weaknessAggArrMax.push(element[1])
                  }
                  x++;                          
               });
            createAnalysis()              
            }, 1000);
         })
         .catch((err) => {
            console.log(err.message)
         })         
      });
   }
   
   const createAnalysis = () => {
      const result = []
      const result2 = []
      const typeWeakness = []
      weaknessAggArr.forEach(element => {
         typeWeakness.push(element[1])
      });
      
      const greatestWeakness = (weaknessAggArr[typeWeakness.indexOf(Math.max(...typeWeakness))][0])
      fetch(`https://pokeapi.co/api/v2/type/${greatestWeakness}`)
      .then((response) => response.json())
      .then((data) => {         
         data.damage_relations.double_damage_from.forEach(element => {
            result.push(element.name)            
         }); 
         data.damage_relations.double_damage_to.forEach(element => {
            result2.push(element.name)            
         });
         let overCome = ''
         let overCome2 = ''
         for(let i = 0; i < result.length; i++){
            if(i === (result.length - 1)){
               overCome = `${overCome} or ${result[i]}`
            } else {
               overCome = `${overCome} ${result[i]}`
            }     
         }
         for(let i = 0; i < result2.length; i++){
            if(i === (result2.length - 1)){
               overCome2 = `${overCome2} or ${result2[i]}`
            } else {
               overCome2 = `${overCome2} ${result2[i]}`
            }     
         }
         if(Math.max(...typeWeakness) <= 6 ){
            document.getElementById("weaknessAnalysis").firstChild.innerHTML = `Your team is balanced`
         } else {
            document.getElementById("weaknessAnalysis").firstChild.innerHTML = `Your team is greatly weak to ${greatestWeakness} types. Consider adding ${overCome} types in place of ${overCome2} types \n Alternatively, remove`
         }
      })
      .catch((err) => {
         console.log(err.message)
      })
      
   }
   
   return( 
      <div id="body">
         <div id="pokemonPick">
            
            <div id="choiceContainer" >
            <select id="pokemon1" className="pokemonPick"></select>
            <img id="pokemonIcon1" className="icon" alt="icon" ></img>
            </div>
            <div id="choiceContainer" >
            <select id="pokemon2" className="pokemonPick"></select>
            <img id="pokemonIcon2" className="icon" alt="icon" ></img>
            </div>
            <div id="choiceContainer" >
            <select id="pokemon3" className="pokemonPick"></select>
            <img id="pokemonIcon3" className="icon" alt="icon" ></img>
            </div>
            <div id="choiceContainer" >
            <select id="pokemon4" className="pokemonPick"></select>
            <img id="pokemonIcon4" className="icon" alt="icon" ></img>
            </div>
            <div id="choiceContainer" >
            <select id="pokemon5" className="pokemonPick"></select>
            <img id="pokemonIcon5" className="icon" alt="icon" ></img>
            </div>
            <div id="choiceContainer" >
            <select id="pokemon6" className="pokemonPick"></select>
            <img id="pokemonIcon6" className="icon" alt="icon" ></img>
            </div>
         </div>
         <button id="getData" onClick={getData}>Get Data</button>
         <div id="weaknesses">
            <div id="type1" className="typedisplay">
               <h4>Normal</h4>
            </div>
            <div id="type2" className="typedisplay">
               <h4>Fire</h4>
            </div>
            <div id="type3" className="typedisplay">
               <h4>Water</h4>
            </div>
            <div id="type4" className="typedisplay">
               <h4>Grass</h4>
            </div>
            <div id="type5" className="typedisplay">
               <h4>Electric</h4>
            </div>
            <div id="type6" className="typedisplay">
               <h4>Ice</h4>
            </div>
            <div id="type7" className="typedisplay">
               <h4>Fighting</h4>
            </div>
            <div id="type8" className="typedisplay">
               <h4>Poison</h4>
            </div>
            <div id="type9" className="typedisplay">
               <h4>Ground</h4>
            </div>
            <div id="type10" className="typedisplay">
               <h4>Flying</h4>
            </div>
            <div id="type11" className="typedisplay">
               <h4>Psychic</h4>
            </div>
            <div id="type12" className="typedisplay">
               <h4>Bug</h4>
            </div>
            <div id="type13" className="typedisplay">
               <h4>Rock</h4>
            </div>
            <div id="type14" className="typedisplay">
               <h4>Ghost</h4>
            </div>
            <div id="type15" className="typedisplay">
               <h4>Dark</h4>
            </div>
            <div id="type16" className="typedisplay">
               <h4>Dragon</h4>
            </div>
            <div id="type17" className="typedisplay">
               <h4>Steel</h4>
            </div>
            <div id="type18" className="typedisplay">
               <h4>Fairy</h4>
            </div>
         </div>
         <div id="weaknessAnalysis">
            <h1 id="infotextbox"></h1>
         </div>
      </div>
   )
}
export default Body