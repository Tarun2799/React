// import User from "./User";
// import UserClass from "./UserClass";
// import UserContext from "../utils/UserContext";

// const About = ()=>{
//     return (
//         <div className="p-10 border border-black mx-10 my-20">
//             <h1 className="text-2xl font-bold py-4">About:</h1>
//             {/* <User name={"Tarun Jhamb(using props)"}/> */}
//             <div>
//                 <UserContext.Consumer>
//                     {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
//                 </UserContext.Consumer>
//             </div>
//             <UserClass name={"Rajat Jhamb(using Class)"} location={"Karnal, Haryana"}/>
//         </div>
//     )
// }

// export default About;


import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "Tarun Jhamb",
      role: "CEO",
      bio: "Tarun is the visionary behind our company, with over 20 years of experience in the tech industry.",
      image: "https://via.placeholder.com/150",
      social: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "Varun Jhamb",
      role: "CTO",
      bio: "Varun is the tech guru who leads our development team with her extensive knowledge in software engineering.",
      image: "https://via.placeholder.com/150",
      social: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith"
      }
    },
    {
      name: "Kirat Kakkar",
      role: "COO",
      bio: "Kirat ensures that our operations run smoothly and efficiently, managing both people and processes.",
      image: "https://via.placeholder.com/150",
      social: {
        github: "https://github.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
        twitter: "https://twitter.com/alicejohnson"
      }
    }
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-center text-lg mb-12">We are a dedicated team of professionals committed to delivering the best products and services to our customers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-xl text-gray-500 mb-4">{member.role}</h3>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.github} className="text-gray-700 hover:text-gray-900">
                  <FaGithub size={24} />
                </a>
                <a href={member.social.linkedin} className="text-gray-700 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.social.twitter} className="text-gray-700 hover:text-gray-900">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default About;
