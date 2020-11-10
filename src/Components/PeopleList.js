import React from 'react'

const PeopleList = ({ people, removePerson }) => {

  return (
    <div>
      { people.map(person => {
        const { id, name, age, image } = person
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h5>{name}</h5>
              <p>
                {age} years old
                <br />
                <button id="person-button" onClick={() => removePerson(person)}>Wished!</button>
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default PeopleList