import { ChangeEvent, useState } from 'react'

export function CondRend() {
  const [show, setShow] = useState(true)
  const [myNumber, setMyNumber] = useState(0)

  // let html = (<div>Nu syns jag!</div>)
  // if (!show) {
  //     html = <></>
  // }
  function handleClick() {
    setShow(!show)
  }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setMyNumber(+e.target.value)
  }
  return (
    <>
      <button onClick={handleClick}>Kicka</button>
      {show && <div>Nu syns jag!</div>}

      <div>
        <input type="text" onChange={handleChange} />
        {myNumber > 10 && <p>Wow! stort tal</p>}
        {myNumber <= 10 && <p>Pfft! litet tal</p>}
      </div>
    </>
  )
}
