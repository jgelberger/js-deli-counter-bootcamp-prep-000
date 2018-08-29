function takeANumber(currentLine, newPerson) {
  var spot = currentLine.length + 1;
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${spot} in line.`;
}

function nowServing(currentLine) {
  if (currentLine.length > 0) {
    var served = currentLine[0];
    currentLine.shift();
    return `Currently serving ${served}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(currentLine) {
  if (currentLine.length > 0) {
    var line = {};
    for (currentLine.length > 0) {
      
      line[key] = currentLine[0];
      currentLine.shift();
    }
  } else {
    return 'The line is currently empty.';
  }
}