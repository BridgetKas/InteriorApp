import React, { Fragment } from 'react'
import person1 from "../../assets/team/person_1.jpg"
import person2 from "../../assets/team/person_2.jpg"
import person3 from "../../assets/team/person_3.jpg"
import person4 from "../../assets/team/person_4.jpg"
import styles from "./Team.module.css"


const heading = "Our Team"
const people = [
    {
        image:person1,
        name:"Lawson Arnold",
        title:"CEO, Founder, Atty.",
        descrptn:"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        link:"Read More",
        id:0,
    },
    {
        image:person2,
        name:"Jeremy Walker",
        title:"CEO, Founder, Atty.",
        descrptn:"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        link:"Read More",
        id:1,
    },
    {
        image:person3,
        name:"Patrik White",
        title:"CEO, Founder, Atty.",
        descrptn:"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        link:"Read More",
        id:2,
    },    
    {
        image:person4,
        name:"Kathryn Ryan",
        title:"CEO, Founder, Atty.",
        descrptn:"Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        link:"Read More",
        id:3,
    }
]

function TeamA() {
  return (
    <Fragment>
        <div className={styles.headingContainer}>
            <h1>{heading}</h1>
        </div>
        <div className={styles.teamContainer}>
            {people.map((person) =>{ 
                return <div key={person.id}>
                    <div className={styles.imageContainer}>
                        <img src={person.image} alt="Image of a team member" className={styles.imageTeam}/>
                    </div>
                    <p className={styles.nameTeam}>{person.name}</p>
                    <p className={styles.job}>{person.title}</p>
                    <p className={styles.descrption}>{person.descrptn}</p>
                    <a href="#" className={styles.link}>{person.link}</a>
                </div>
            })}

        </div>
    </Fragment>
  )
}

export default TeamA