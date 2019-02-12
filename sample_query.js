module.exports = Object.freeze(
{
    "aggs": {
        "blog_comments": {
            "nested": {
                "path": "comments"
            },
            "aggs": {
                "age_group": {
                    "histogram": {
                        "field": "comments.age",
                        "interval": 10
                    },
                    "aggs": {
                        "blog_posts": {
                            "reverse_nested": {},
                            "aggs": {
                                "tags": {
                                    "terms": {
                                        "field": "tags"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
)