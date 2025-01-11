function toFahrenheit(celsius) {
 // Write your code here

	let fahrenheit = (celsius*9/5)+32
	return round(fahrenheit)
}

// Do not change the code below
const celsius = promp("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
