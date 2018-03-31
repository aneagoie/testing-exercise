// Now a little bit more realistic:
const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}
const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data =  await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}
// getPeople();
// getPeoplePromise();

module.exports = {
  getPeople,
  getPeoplePromise
}