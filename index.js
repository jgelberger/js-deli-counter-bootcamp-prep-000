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
   var string = 'The line is currently:';
   for (var i = 0; i < currentLine.length; i++) {
     if (i < currentLine.length -1) {
     string = `${string} ${i+1}. ${currentLine[i]}
   }
   
   
   
   
   
   /* var lineArray = [];
    for (var i = 0; i < currentLine.length; i++) {
      if (i < currentLine.length -1) {
        lineArray[i] = `${i + 1}. ${currentLine[i]}, `;
      } else {
        lineArray[i] = `${i + 1}. ${currentLine[i]}`;
      }
    return   
    }*/
  } else {
    return 'The line is currently empty.';
  }
}