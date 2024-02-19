import { useState } from 'react'
import Container from './components/Container'
import Screen from './components/Screen'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Button from './components/Button'

function App() {

  const [screenValue, setScreenValue] = useState('0')
  const [result, setResult] = useState([])

  const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ]

  const buttonClickHandler = (e, btn) => {
    btn === "C"
      ? resetClickHandler()
      : btn === "+-"
        ? invertClickHandler()
        : btn === "%"
          ? percentClickHandler()
          : btn === "="
            ? equalsToClickHandler()
            : btn === "."
              ? commaClickHandler(e)
              : btn === "+" || btn === '-' || btn === "/" || btn === "x"
                ? signClickHandler(e)
                : numClickHandler(e)
  }

  const signClickHandler = (e) => {


    if (Number(screenValue[screenValue.length - 1]) % 1 === 0) {
      setScreenValue((prev) => prev + e.target.innerHTML)

      if (e.target.innerHTML === 'x') {
        setResult((prev) => [...prev, '*'])

      } else {

        setResult((prev) => [...prev, e.target.innerHTML])
      }
    }
  }

  console.log(screenValue, typeof screenValue, 'screenValue');

  const equalsToClickHandler = () => {
    let str = result.join('')
    let res = eval(str)
    let newResEntry = res.toString()
    setScreenValue(newResEntry)
    setResult([newResEntry])
  }

  const resetClickHandler = () => {
    setScreenValue('0')
    setResult([])
  }

  const numClickHandler = (e) => {
    // console.log(screenValue, "screenValue");

    const value = e.target.innerHTML

    setResult((prev) => [...prev, e.target.innerHTML])


    // let val = result.join('')

    setScreenValue((prev) => prev === '0' ? value : prev + value)

    // console.log(screenValue);
  }
  console.log(result, typeof result[0], "result");

  const commaClickHandler = (e) => {
    const value = e.target.innerHTML

    if (Number(screenValue[screenValue.length - 1]) % 1 === 0) {
      setScreenValue((prev) => prev + '.')
      setResult((prev) => [...prev, '.'])
    }
  }

  const percentClickHandler = () => {
    if (!screenValue.includes("x") && !screenValue.includes("+") && !screenValue.includes("-") && !screenValue.includes("/")) {
      setScreenValue((prev) => (prev / 100).toString())
      setResult((prev) => [(prev / 100).toString()])
    }
  }

  const invertClickHandler = () => {
    if (screenValue[screenValue.length - 2] === "-" && result[result.length - 2] === "-") {
      {
        let str = screenValue
        let firstPart = str.substring(0, str.length - 2)
        let lastPart = str.substring(str.length - 1)

        let newStr = firstPart + "+" + lastPart

        setScreenValue(newStr)
      }
      
      {
        let newArr = result
        newArr[newArr.length - 2] = '+'
        setResult(newArr)
      }
      // console.log(result);
    } else if(screenValue[screenValue.length - 2] === "+" && result[result.length - 2] === "+"){
      {
        let str = screenValue
        let firstPart = str.substring(0, str.length - 2)
        let lastPart = str.substring(str.length - 1)

        let newStr = firstPart + "-" + lastPart

        setScreenValue(newStr)
      }
      
      {
        let newArr = result
        newArr[newArr.length - 2] = '-'
        setResult(newArr)
      }
    } else{
      setScreenValue((prev) => (Number(prev * -1).toString()))
      setResult((prev) => [prev*-1])
    }
  }
  return (

    <div className='flex justify-center items-center h-screen bg-[#070F2B]'>

      <Container>

        <Screen value={screenValue} />
        <ButtonContainer>
          {

            btnValues.flat().map((btn, index) => (
              <Button
                key={index}
                value={btn}
                onClick={(e) => buttonClickHandler(e, btn)}
                className={btn === "=" ? "bg-[#9290C3] text-white font-bold rounded-lg text-2xl col-span-2 hover:bg-[#9290C3]/75" : "bg-[#9290C3] hover:bg-[#9290C3]/75 text-white font-bold rounded-lg text-2xl"}
              />
            ))

          }
        </ButtonContainer>
      </Container>

    </div>
  )
}

export default App
