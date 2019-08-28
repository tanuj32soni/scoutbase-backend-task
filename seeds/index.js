require('dotenv').config()

const _ = require('lodash')
const sequelize = require('./../lib/sequelize')

async function feeddata (feed) {
  const primary = feed.model.primaryKeyAttributes[0]
  for (const indx in feed.data) {
    const record = feed.data[indx]
    if (record[primary]) {
      await feed.model.upsert(_.omit(record, '__relations'), {
        where: {
          [primary]: record[primary]
        },
        returning: true
      })
      if (record.__relations) {
        const object = await feed.model.findByPk(record[primary])
        for (const relationIndx in record.__relations) {
          const relatedData = record.__relations[relationIndx]
          await object[relatedData.call](relatedData.values)
        }
      }
    } else {
      await feed.model.create(record)
    }
  }
}

async function seedData () {
  try {
    await sequelize.connect()
    await feeddata(require('./crewmember'))
    await feeddata(require('./movie'))
    await sequelize.disconnect()
  } catch (error) {
    throw new Error(`Error occurred while seeding: ${error}`)
  }
}

seedData()
