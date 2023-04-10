import {getDatabase, ref, set} from "firebase/database"

const Footer = () => {
   let team = [];
   const storeTeam = () => {
      const tempTeam = []
      const pokemonName1 = document.getElementById('pokemon1').value
      const pokemonName2 = document.getElementById("pokemon2").value
      const pokemonName3 = document.getElementById("pokemon3").value
      const pokemonName4 = document.getElementById("pokemon4").value
      const pokemonName5 = document.getElementById("pokemon5").value
      const pokemonName6 = document.getElementById("pokemon6").value
      tempTeam.push(pokemonName1)
      tempTeam.push(pokemonName2)
      tempTeam.push(pokemonName3)
      tempTeam.push(pokemonName4)
      tempTeam.push(pokemonName5)
      tempTeam.push(pokemonName6)
      team = tempTeam
   }

   const saveTeam1 = () => {
      storeTeam()
      localStorage.setItem("team1", JSON.stringify(team))
   }

   const saveTeam2 = () => {
      storeTeam()
      localStorage.setItem("team2", JSON.stringify(team))
   }

   const saveTeam3 = () => {
      storeTeam()
      localStorage.setItem("team3", JSON.stringify(team))
   }

   const saveTeam4 = () => {
      storeTeam()
      localStorage.setItem("team4", JSON.stringify(team))
   }

   const saveTeam5 = () => {
      storeTeam()
      localStorage.setItem("team5", JSON.stringify(team))
   }

   const saveTeam6 = () => {
      storeTeam()
      localStorage.setItem("team6", JSON.stringify(team))
   }

   const loadTeam1 = () => {
      if(localStorage.getItem("team1")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team1"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team1"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team1"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team1"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team1"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team1"))[5]
      } else {
         alert("no team 1")
      }
   }

   const loadTeam2 = () => {
      if(localStorage.getItem("team2")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team2"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team2"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team2"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team2"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team2"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team2"))[5]
      } else {
         alert("no team 2")
      }
   }

   const loadTeam3 = () => {
      if(localStorage.getItem("team3")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team3"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team3"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team3"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team3"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team3"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team3"))[5]
      } else {
         alert("no team 3")
      }
      
   }

   const loadTeam4 = () => {
      if(localStorage.getItem("team4")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team4"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team4"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team4"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team4"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team4"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team4"))[5]
      } else {
         alert("no team 4")
      }
   }

   const loadTeam5 = () => {
      if(localStorage.getItem("team5")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team5"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team5"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team5"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team5"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team5"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team5"))[5]
      } else {
         alert("no team 5")
      }
   }

   const loadTeam6 = () => {
      if(localStorage.getItem("team6")){
         document.getElementById('pokemon1').value = JSON.parse(localStorage.getItem("team6"))[0]
         document.getElementById("pokemon2").value = JSON.parse(localStorage.getItem("team6"))[1]
         document.getElementById("pokemon3").value = JSON.parse(localStorage.getItem("team6"))[2]
         document.getElementById("pokemon4").value = JSON.parse(localStorage.getItem("team6"))[3]
         document.getElementById("pokemon5").value = JSON.parse(localStorage.getItem("team6"))[4]
         document.getElementById("pokemon6").value = JSON.parse(localStorage.getItem("team6"))[5]
      } else {
         alert("no team 6")
      }
   }

   const syncData = () => {
      const db = getDatabase();
      const reference = ref(db, "users/" + localStorage.getItem("uid"))

      set(reference, {
         username: localStorage.getItem("name"),
         email: localStorage.getItem("email"),
         profile_pic: localStorage.getItem("profilePic"),
         teams:  {team1: JSON.parse(localStorage.getItem("team1")),
                  team2: JSON.parse(localStorage.getItem("team2")),
                  team3: JSON.parse(localStorage.getItem("team3")),
                  team4: JSON.parse(localStorage.getItem("team4")),
                  team5: JSON.parse(localStorage.getItem("team5")),
                  team6: JSON.parse(localStorage.getItem("team6"))}
      })
   }

   return(
      <div id="footer">
         <div className="teamEdit" >
         <div onClick={saveTeam1} className="saveteam" id="saveteam1">Save 1</div>
         <div onClick={loadTeam1} className="saveteam" id="loadTeam1">Load 1</div>
         </div>
         
         <div className="teamEdit" >
         <div onClick={saveTeam2} className="saveteam" id="saveteam2">Save 2</div>
         <div onClick={loadTeam2} className="saveteam" id="loadTeam2">Load 2</div>
         </div>
         
         <div className="teamEdit" >
         <div onClick={saveTeam3} className="saveteam" id="saveteam3">Save 3</div>
         <div onClick={loadTeam3} className="saveteam" id="loadTeam3">Load 3</div>
         </div>
         
         <div className="teamEdit" >
         <div onClick={saveTeam4} className="saveteam" id="saveteam4">Save 4</div>
         <div onClick={loadTeam4} className="saveteam" id="loadTeam4">Load 4</div>
         </div>
         
         <div className="teamEdit" >
         <div onClick={saveTeam5} className="saveteam" id="saveteam5">Save 5</div>
         <div onClick={loadTeam5} className="saveteam" id="loadTeam5">Load 5</div>
         </div>
         
         <div className="teamEdit" >
         <div onClick={saveTeam6} className="saveteam" id="saveteam6">Save 6</div>
         <div onClick={loadTeam6} className="saveteam" id="loadTeam6">Load 6</div>
         </div>

         <div id="dataSync"className="teamEdit">
            <div onClick={syncData} className="saveteam" >Sync</div>
         </div>
         
      </div>
   )
}
export default Footer