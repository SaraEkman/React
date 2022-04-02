import { ChangeEvent, useState } from 'react'

interface INewUser {
  firstname: string
  lastname: string
  email: string
  phonenamber: string
}

export const Register = () => {
  const [newUser, setNewUser] = useState<INewUser>({
    firstname: '',
    lastname: '',
    email: '',
    phonenamber: '',
  })

  console.log(newUser)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={newUser.firstname}
          placeholder="FörNamn"
          onChange={handleChange}
          name="firstname"
        />
        <input
          type="text"
          value={newUser.lastname}
          placeholder="EfterNamn"
          onChange={handleChange}
          name="lastname"
        />
        <input
          type="text"
          value={newUser.email}
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          value={newUser.phonenamber}
          placeholder="TelefonNummer"
          onChange={handleChange}
          name="phonenamber"
        />
      </form>
    </>
  )
}
