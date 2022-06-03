import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443&w=630&h=354&ffmt=webp'
        }, 
        {
            name: 'mark zuckerberg',
            url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg'
        }
    ]);

    return(
        <div>
            <h1>Tinder cards</h1>
            {people.map(person => (
               <TinderCard className="swipe"
               key={person.name}
            //    prevents from swiping up and down
               preventSwipe={['up', 'down']}>
                   <div style={{backgroundImage: `url(${person.url})`}}className="card">
                       <h3> {person.name}</h3>
                       
                   </div>
               </TinderCard> 
            ))}
        </div>
    )
};

export default TinderCards;