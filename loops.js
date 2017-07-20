function forLoop (anArray) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      anArray.push('I am 1 strange loop.')
    } else {
      anArray.push('I am ${i} strange loops.')
    }
  }
  return anArray
}

function whileLoop (aNo) {
  while (aNo > 0) {
    console.log(--aNo)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (anArray) {
  do {
    anArray.pop()
  } while (anArray.length > 0 && maybeTrue());
  return anArray
}
