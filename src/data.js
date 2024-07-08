// export const API_KEY = "AIzaSyBQBURyjJhrX9KWRN12rEVM-zCjqbTua8s";

export const API_KEY = "AIzaSyBj0tWDIVjAqhDaiR91EcVrNMQz4rPTBLE";

export const calculatingviews = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
