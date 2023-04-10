import { signInWithGoogle} from "../firebase"

const Header = () => {   
   
   alert("This app is a work in progress so expect there to be bugs here and there. Currently the calculator does not account for the weakness of multitype pokemon and instead sees each type in the multitype as a separate calculator. This will change")

   alert("In order to save your information to use across multiple devices 1) Create your team 2) Save your team (on the footer) and then  3) Sync. In order to to view your team on another device simply log in!")
   
   return(
      <div id="header">
         <div id="menu" >Menu</div>
         <div id="title">POKEMON CALCULATOR</div>
         <div id="user" onClick={signInWithGoogle}>
            <div id="login">Login</div>
            <div id="loggedin">
               <h5>{localStorage.getItem("name")}</h5>
               <img alt="" src={localStorage.getItem("profilePic")}/>
            </div>
         </div>
      </div>
   )
}
export default Header