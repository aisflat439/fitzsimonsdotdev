const avatarLengthHandler = (str) => {
  if (str.length > 4) {
    return [...str][0].toUpperCase()
  }
  return str.slice(0, 1).toUpperCase().concat(str.slice(1))
}

export default avatarLengthHandler