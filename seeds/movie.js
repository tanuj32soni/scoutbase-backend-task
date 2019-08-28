const models = require('../app/models')

module.exports = {
  model: models.Movie,
  data: [
    {
      id: 1,
      scoutbase_rating: 9.0,
      title: 'Iron Man',
      year: 2008,
      rating: 10,
      __relations: [{
        call: 'setCrewMembers',
        values: [1, 2]
      }]
    },
    {
      id: 2,
      scoutbase_rating: 9.0,
      title: 'Iron Man2',
      year: 2010,
      rating: 10,
      __relations: [{
        call: 'setCrewMembers',
        values: [1, 2, 3]
      }]
    }
  ]
}
