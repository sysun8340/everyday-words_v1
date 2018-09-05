import data from './data.json'

export const getWordsMessage = currentDate => {
  const id = `${currentDate.getMonth() + 1}-${currentDate.getDate()}`
  return data.words.find(word => word.id === id)
}
