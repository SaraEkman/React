import { ChangeEvent, useState } from 'react'

export const Add = () => {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)

  const firstHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(+e.target.value)
  }
  const secondHendleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(+e.target.value)
  }
  const showResult = () => {
    setResult(firstNumber + secondNumber)
  }
  return (
    <>
      <input type="text" onChange={firstHandleChange} value={firstNumber} />
      <input type="text" onChange={secondHendleChange} value={secondNumber} />
      <button onClick={showResult}>Result</button>
      <h3>Result: {result}</h3>
    </>
  )
}
