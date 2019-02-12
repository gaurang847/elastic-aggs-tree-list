# elastic-aggs-tree-list
 Simple Node.js script that takes the aggregation body of an elasticsearch query and displays it in a tree-list form. Thus, giving out a better visual feedback of the structure of aggregations.

#### Pre-requisite:
Clone the repository and run `$ npm install` in the installed directory.

#### Usage:
1. Add `query.js` taking reference from [`sample_query.js`][1].
2. Run `$ node index.js` in the terminal.

For the given sample query, the script prints out the following list-tree in the terminal:
```
----blog_comments
    |
    ----age_group
        |
        ----blog_posts
            |
            ----tags
```

#### Advanced:
The script is divided into two parts: `reducer` and `output_interface`.
1. The `reducer` processes the query object and converts it into an array so that
```
{
    "aggs": {
        "agg_one": {
            "term": <...>,
            "aggs": {
                "agg_two": {...}
            }
        },
        "agg_three": {...}
    }
}
```
a complex aggregation body object of ^this form, is transformed into a flat array-of-arrays where each inner array has the form `[depth_level, aggregation_name]`:
```
[
    [0, "agg_one"],
    [1, "agg_two"],
    [0, "agg_three"]
]
```
2. The `output_interface` is responsible for taking the resultant flat array, i.e. the output of reducer, and displaying it.
```
----agg_one
    |
    ----agg_two
    
----agg_three
```

NB. The reducer is written using [functional programming paradigm][fp]. Since, it is unavoidable to have a side-effect in the display/output related part of the system, it has been written in a separate file. Thereby, maintaining separation of concerns. 


[1]: ./sample_query.js
[fp]: https://www.geeksforgeeks.org/functional-programming-paradigm/
