import User from "./User";
import UserClass from "./UserClass";


const About = ()=>{
    return (
        <div className="p-10 border border-black mx-10 my-20">
            <h1 className="text-2xl font-bold py-4">About:</h1>
            {/* <User name={"Tarun Jhamb(using props)"}/> */}
            <UserClass name={"Rajat Jhamb(using Class)"} location={"Karnal, Haryana"}/>
        </div>
    )
}

export default About;