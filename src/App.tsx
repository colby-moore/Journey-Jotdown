import { SyntheticEvent, useEffect, useState } from 'react'
import './App.css'
import Expense from './components/Expense';

function App() {
  const [hotelCost, setHotelCost] = useState(0);
  const [transportationCost, setTransportationCost] = useState(0);
  const [experienceCost, setExperienceCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleHotelChange = (event: SyntheticEvent) => {
    const expenseCost = Number((event.target as HTMLInputElement).value)
    setHotelCost(expenseCost);
  }

  const handleTransportationChange = (event: SyntheticEvent) => {
    const expenseCost = Number((event.target as HTMLInputElement).value)
    setTransportationCost(expenseCost);
  }

  const handleExperienceChange = (event: SyntheticEvent) => {
    const expenseCost = Number((event.target as HTMLInputElement).value)
    setExperienceCost(expenseCost);
  }


  useEffect(() => {
    setTotalCost(hotelCost + transportationCost + experienceCost);
  },[ hotelCost, transportationCost, experienceCost])

  return (
    <>
      <h1>Total Cost: {totalCost}</h1>
      <div className='row'>
        <Expense expenseType="Hotel" state={hotelCost} onChange={handleHotelChange}/>
        <Expense expenseType="Transportation" state={transportationCost} onChange={handleTransportationChange}/>
        <Expense expenseType="Experience" state={experienceCost} onChange={handleExperienceChange}/>
      </div>
    </>
  )
}

export default App
