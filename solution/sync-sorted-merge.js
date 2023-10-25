"use strict";


// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {

 logSources.sort(function(a,b) {
    return new Date(a['last']['date']) - new Date(b['last']['date'])
 });

 for(let i=0; i<logSources.length; i++){
  printer.print(logSources[i]['last'] )
 }
  printer.done()
  return console.log("Sync sort complete.");
};
