import React from 'react'

const PeopleList = ({ people }) => {

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
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default PeopleList