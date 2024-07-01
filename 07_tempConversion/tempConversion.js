/*   
FUNCTION to convert from faranheit to celsius
FORMULA (x °C ≘ (x × 9/5 + 32) °F)
PARAMETER number (negative inclusive)
*/
const convertToCelsius = function (fahrenheit) {

  // 1. CHECK for input type to be number only
  // 2. ROUND number to one decimal place
  // 3. CONVERT returned rounded string back to number
  // 4. IMPLEMENT formula
    // SUBTRACT 32 from Fahrenheit value
    // MULTIPLY result by 5 / 9
  // 5. RETURN result rounded to one decimal place

  if (typeof fahrenheit !== "number") {
    return "Input must be a number";
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return parseFloat(celsius.toFixed(1));
};

/*   
FUNCTION to convert from celcius to faranheit    
FORMULA (x °F ≘ (x − 32) × 5/9 °C)
PARAMETER number (negative inclusive)
*/
const convertToFahrenheit = function (celsius) {

  if (typeof celsius !== "number") {
    return "Input must be a number";
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
