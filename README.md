# lolibrary-api-proxy

Node.js and express based API to serve filter data for lolibrary.org search API.

Hosted on Heroku. Base URL: https://lovelace-db-api.herokuapp.com

**Currently a WIP!**

## rationale

While the lolibrary search API is public, the list of filter values for each filter parameter is locked behind a password protected private API. I wanted to avoid having users log in to use the mobile lolibrary search app that I'm building, so I decided to create my own database and filter API instead.

## Routes

### `GET /filters`

Returns an object containing arrays for all filters. Arrays may contain strings or numbers as described below.

```json
{
    "brand" : ["string",...],
    "category" : ["string",...],
    "colorway" : ["string",...],
    "features" : ["string",...],
    "tags" : ["string",...],
    "year" : [1998, 1999, ...]
}
```

### `GET /filters/brand`

Returns an object containing all possible values for the brand filter (an array of strings).

```json
{
    "brand" : ["string",...],
}
```

### `GET /filters/category`

Returns an object containing all possible values for the category filter (an array of strings).

```json
{
    "category" : ["string",...],
}
```

### `GET /filters/colorway`

Returns an object containing all possible values for the category filter (an array of strings).

```json
{
    "colorway" : ["string", ...],
}
```

### `GET /filters/features`

Returns an object containing all possible values for the features filter (an array of strings).

```json
{
    "features" : ["string",...],
}
```

### `GET /filters/tags`

Returns an object containing all possible values for the tags filter (an array of strings).

```json
{
    "tags" : ["string",...],
}
```

### `GET /filters/year`

Returns an object containing all possible values for the year filter (an array of numbers).

```json
{
    "year" : [1998, 1999,...],
}
```

### `POST /filters/import`

Accepts a JSON payload as input and inserts values into the connected database. This endpoint requires bearer token authorization (fullfilled by auth0 auth server).
