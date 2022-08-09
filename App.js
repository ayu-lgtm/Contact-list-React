import React, { useState, useEffect } from "react";
import './App.css';
import ContactCard from './ContactCard';
const App = () => {

  /*const contacts = [
    {
      img: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
      name: "Ayush Rastogi",
      email: "rastogi.ayush2000@gmail.com",
      age: 22
    },
    {
      img: "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
      name: "Sarthak Rastogi",
      email: "rastogi.sarthak2003@gmail.com",
      age: 19
    },
  ]; */

  const [results, setresults] = useState([]);

  //fetch api
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5").then(response => response.json()).then(data => {
      console.log(data)
      setresults(data.results);

    });
  }, [])





  //then(data=>{console.log(data)}
  return (
    <div className="main">
      {results.map((result, index) => {
        return (
          <ContactCard key={index}
            img={result.picture.large}
            name={result.name.first}
            gender={result.gender}
            email={result.email}
            phone={result.phone}
            age={result.dob.age}

          />
        )
      })}

    </div>


  );
};

export default App;
