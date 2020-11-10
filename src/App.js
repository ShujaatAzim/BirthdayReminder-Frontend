import React, { useState } from 'react'
import PeopleList from './Components/PeopleList'
import { people } from './Misc/people'
import './Misc/index.css'

const App = () => {

  const [allPeople, setAllPeople] = useState(people)

  const removePerson = person => {
    let poo = allPeople.filter(p => p.name !== person.name)
    setAllPeople(poo)
  }

  return (
    <main>
      <div className="container">
        <h3>Birthday Reminder</h3>
        <h6>By Shujaat Azim</h6>
        <p>
          This small project is meant to be a learning exercise, and its completion demonstrates understanding of modern React and JS principles; these 
          include passing data between components as props, state setting and rendering, hooks, functional component use, effective styling, 
          and component tree organization.
        </p>
        <h4>{allPeople.length} Birthdays Today!</h4>
        <PeopleList people={allPeople} removePerson={person => removePerson(person)} />
        <button onClick={() => setAllPeople([])}>Clear</button>
      </div>
    </main>
  )
}

export default App;
