const getBack = (condition, dt, sunrise) => {
  console.log(condition, dt, sunrise);
  let background;
  if (condition === 'Clear' && dt > sunrise) {
    background = 'sunny';
  } else if (condition === 'Drizzle' && dt > sunrise) {
    background = 'drizzle';
  } else if (condition === 'Clouds' && dt > sunrise) {
    background = 'clouds';
  } else if (condition === 'Thunderstorm' && dt > sunrise) {
    background = 'thundestrorm';
  } else if (condition === 'Rain' && dt > sunrise) {
    background = 'rain';
  } else if (condition === 'Snow' && dt > sunrise) {
    background = 'snow';
  } else if (condition === 'Clear' && dt < sunrise) {
    background = 'clear-night';
  } else if (condition === 'Drizzle' && dt < sunrise) {
    background = 'drizzle-night';
  } else if (condition === 'Thunderstorm' && dt < sunrise) {
    background = 'stormy-night';
  } else if (condition === 'Rain' && dt < sunrise) {
    background = 'rainy-night';
  } else if (condition === 'Clouds' && dt < sunrise) {
    background = 'cloudy-night';
  } else if (!sunrise) {
    background = 'no-sunrise';
  } else if (condition === 'Haze' && dt < sunrise) {
    background = 'haze';
  } else if (condition === 'Haze' && dt > sunrise) {
    background = 'haze-night';
  }
  return background;
};

export default getBack;
