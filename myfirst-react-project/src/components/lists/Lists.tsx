export function Lists() {
  let animals: string[] = ['Majsan', 'Sven', 'Tweet']
  let persons = [
    { name: 'Sara', age: 22 },
    { name: 'Helle', age: 10 },
    { name: 'Jonte', age: 30 },
    { name: 'Iren', age: 50 },
  ]

  let lis = animals.map((animal, i) => {
    return <li key={i}>{animal}</li>
  })

  let personLis = persons.map((person) => {
    if (person.age > 10) {
      return (
        <li key={person.name}>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </li>
      )
    }
  })
  return (
    <>
      <ul>{lis}</ul>
      <ul>{personLis}</ul>
    </>
  )
}
