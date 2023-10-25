"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer, heap) => {
  var logs = []
  let completed = 0
  return new Promise((resolve, reject) => {
    for(let i=0; i<logSources.length; i++){
      var a = logSources[i].popAsync()
      if (a != false) {
        a.then(data => {
          completed++;
          logs.push(data)
          if (completed == logSources.length) {
              logs.sort(function(a,b) {
                return new Date(a['date']) - new Date(b['date'])
              });  
              for(let i=0; i<logs.length; i++){
                printer.print(logs[i] )
              }
              printer.done()
              resolve(console.log("Async sort complete."))
          }
        })
      }
    } 
  });
};