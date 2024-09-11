import DigitButton from "./components/DigitButton";

function App() {

  const handleAddDigit = (digit) =>{
    console.log('El number press is: ',digit)
  }



  return (
    <>
      
      <DigitButton onClick={handleAddDigit} digit="1"/>
      <DigitButton onClick={handleAddDigit} digit="2"/>
      <DigitButton onClick={handleAddDigit} digit="3"/>
      <DigitButton onClick={handleAddDigit} digit="4"/>
      <DigitButton onClick={handleAddDigit} digit="5"/>
      <DigitButton onClick={handleAddDigit} digit="6"/>
      <DigitButton onClick={handleAddDigit} digit="7"/>
      <DigitButton onClick={handleAddDigit} digit="8"/>
      <DigitButton onClick={handleAddDigit} digit="9"/>
      <DigitButton onClick={handleAddDigit} digit="10"/>
    </>
  );
}

export default App;
