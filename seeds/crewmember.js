const models = require('../app/models')

module.exports = {
  model: models.CrewMember,
  data: [
    {
      id: 1,
      name: 'Jon Favreau',
      birthday: new Date('19/Oct/1966'),
      country: 'America',
      role: 'DIRECTOR'
    },
    {
      id: 2,
      name: 'Robert Downey Jr.',
      birthday: new Date('4/Apr/1965'),
      country: 'America',
      role: 'ACTOR'
    },
    {
      id: 3,
      name: 'Scarlett Johansson',
      birthday: new Date('22/Nov/1984'),
      country: 'America',
      role: 'ACTOR'
    }
  ]
}
