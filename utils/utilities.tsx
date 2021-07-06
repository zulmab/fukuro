export const makeLabelPosition = (initialX: number, initialY: number) => ({
  x: initialX + 20,
  y: initialY + 30,
})

export const trimLenght = (text: string, count: number) => {
  return text.slice(0, count)
}
