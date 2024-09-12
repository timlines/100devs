//convert Kelvin to Celsius, then to Fahrenheit

function kelvinCelciusFahrenheit (K) {
  let C = K - 273.15;
  let F = (K - 273.15) * 9/5 + 32;
  console.log(`K: ${K}`);
  console.log(`C: ${C}`);
  console.log(`F: ${F}`);
  }

kelvinCelciusFahrenheit (0)

// 293 Kelvin