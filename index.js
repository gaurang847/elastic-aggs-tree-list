const reducer = require('./reducer');
const output_interface = require('./output_interface');

const QUERY = require('./query');

let reducedAggArray = reducer.reduceAggs(QUERY);
output_interface.display(reducedAggArray);