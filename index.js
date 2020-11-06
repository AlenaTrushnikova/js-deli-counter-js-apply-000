function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
  return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length < 1) {
  return "The line is currently empty."
  }
  
  const peopleInLine = []
  
  for (let i = 0; i < line.length; i++) {
    peopleInLine.push(items[i])
  }
  
  return `"The line is currently: ${currentLine}`

  
   
}