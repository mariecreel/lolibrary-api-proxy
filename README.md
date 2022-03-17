# lolibrary-api-proxy
Node.js and express based API to serve filter data for lolibrary.org search API.
## rationale
While the lolibrary search API is public, the list of filter values for each filter parameter is locked behind a password protected private API. 

## Routes

### `GET /filters`
Returns an object containing arrays for all filters.

```json
{
    "brand" : [...],
    "category" : [...],
    "features" : [...],
    "tags" : [...],
    "year" : [...]
}
```

### `GET /filters/brand`
Returns an object containing all possible values for the brand filter.

```json
{
    "brand" : [...],
}
```
### `GET /filters/category`

Returns an object containing all possible values for the category filter.

```json
{
    "category" : [...],
}
```
### `GET /filters/features`
Returns an object containing all possible values for the features filter.

```json
{
    "features" : [...],
}
```
### `GET /filters/tags`
Returns an object containing all possible values for the tags filter.

```json
{
    "tags" : [...],
}
```

### `GET /filters/year`
Returns an object containing all possible values for the year filter.

```json
{
    "year" : [...],
}
```

## TODO
- add support for search parameters within each route as needed. e.g, `/filters/brand?name=angelic` 
- pagination
- openAPI spec