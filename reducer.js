module.exports = {
    reduceAggs
}

function reduceAggs(datum, level = 0){
    //We consider the query/aggregation body as a tree and perform a depth-first search on it.
    //At each step, we identify all child aggregations to current node
    return Object.entries(datum.aggs)
        //make recursive calls on all children
        .map(_reduceAggUnitStep(level))
        //and flatten out the resulting nested array
        .reduce((accumulator, x) => accumulator.concat(x), []);
}

let _reduceAggUnitStep = level => ([agg_name, aggDatum]) => 
    //At every unit step, add current node to resultant array
    [[level, agg_name]]
    .concat(
        //if child aggregations are present,
        _isDefined(aggDatum.aggs)?
        //make recursive calls to go deeper into the tree and add them as well
        reduceAggs(aggDatum, level + 1):
        //else, just return the resultant
        []
    );

let _isDefined = datum => typeof datum !== 'undefined';