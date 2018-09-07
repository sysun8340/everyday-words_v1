import data from './data.json'

export const getWordsById = id => {
  return data.words.find(word => word.id === id)
}

export const getIdByDate = currentDate => {
  return `${currentDate.getMonth() + 1}-${currentDate.getDate()}`
}

export const genRandomId = () => {
  const thirtyone = [1, 3, 5, 7, 8, 10, 12]
  const thirty = [4, 6, 9, 11]
  const month = Math.floor(Math.random()*12) + 1
  let date = null
  if(thirtyone.indexOf(month) >= 0) {
    date = Math.floor(Math.random()*31) + 1
  }
  else if(thirty.indexOf(month) >= 0) {
    date = Math.floor(Math.random()*30) + 1
  }
  else {
    date = Math.floor(Math.random()*28) + 1
  }
  return `${month}-${date}`
}
