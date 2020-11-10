import React, { useState } from 'react'
import PeopleList from './Components/PeopleList'
import { people } from './Misc/people'
import './Misc/index.css'

const App = () => {

  const [allPeople, setAllPeople] = useState(people)

  return (
    <main>
      <div className="container">
        <h3>Birthday Reminder</h3>
        <h4>{allPeople.length} Birthdays Today!</h4>
        <PeopleList people={allPeople} />
        <button onClick={() => setAllPeople([])}>Clear</button>
      </div>
    </main>
  )
}

export default App;
