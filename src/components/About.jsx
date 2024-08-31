import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name = {"Nishant Sharma (function)"} location={"Kota"} contact = {"nishumay@9"}/>
            <UserClass name = {"Nishant Sharma"} location = {"Kota"} contact = {"nishumay@26"}/>
        </div>
     );
     
};
export default About;