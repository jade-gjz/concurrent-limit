import * as chance from 'chance'

export const request = (chunk: Chunk) => {
  return new Promise((resolve, reject) => {
    const timeout = parseInt(String(Math.random() * 1e4), 10)
    console.log(`start request ${chunk.partNumber} - ${timeout}`)
    setTimeout(() => {
      if (chance.Chance().bool({ likelihood: 90 })) {
        console.log(`end request ${chunk.partNumber}`)
        resolve(chunk.partNumber)
      } else {
        console.log(`end request ${chunk.partNumber} - error`)
        reject(chunk.partNumber)
      }
    }, timeout)
  })
}
