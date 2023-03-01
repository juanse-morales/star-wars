
export const config = {
  envelopeConfiguration: [
    {
      "films": 1,
      "peoples": 3,
      "starships": 1
    },
    {
      "films": 0,
      "peoples": 3,
      "starships": 2
    }
  ],
  countPlatesCategory: {
    "films": 6,
    "peoples": 82,
    "starships": 36
  },
  specialIndexesCategory: {
    films: 6,
    peoples: 20,
    starships: 10
  },
  categories: ['films', 'peoples', 'starships'],
  serverUrl: {
    films: "https://swapi.dev/api/films/?page=",
    peoples: "https://swapi.dev/api/people/?page=",
    starships: "https://swapi.dev/api/starships/?page="
  },
  countDataPerPage: 10,
  numberEnvelope: 4,
  numberPlatesEnvelope: 5
}