[License]://choosealicense.com/licenses/mit/
[geopoints]://help.github.com/en/articles/mapping-geojson-files-on-github

# Website info

The site was created with the support of the *Leaflet* plugin.
Data taken from open sources for 2018.

## Structure of the base site

1. To add a new file with [geopoints], its name must be added to the file array.
2. The file with [geopoints] must contain the structure:

``` json
{
	"type": "FeatureCollection",
	"features": [...]
}
```

3. Description of object "features":
``` json
{
	"type": "Feature",
	"properties": {
		"name": <DESTINATION>,
		"cs": {
			"cnt": <COUNT_TESTS>,
			"avg": <AVERAGE_POWER>,
			"min": <MIN_POWER>,
			"max": <MAX_POWER>
		},
		"sr": {
			"cnt": <COUNT_STUDIES>,
			"avg": <AVERAGE_POWER>,
			"min": <MIN_POWER>,
			"max": <MAX_POWER>
		},
		"pw": <POWER>,
		"upd": <YYYY-MM-DD>
	},
	"geometry": {
		"type": "Point",
		"coordinates": [<LON>, <LAT>]
	},
	"id": <NODE_ID>
}
```

All values have a text data type and must be enclosed in double quotation marks,
unless otherwise specified.

Check the circuit through [json validator](//jsonlint.com).

### Notes for objects "properties":

* Geopoints are drawn on the map according to the data of the `"cs"` object,
therefore it is better to declare it
* The `"sr"` object is optional

### Notes for values:

* `<AVERAGE_POWER>` must be either number of average measured dose
* `<COUNT_TESTS>` must be either integer number of tests
* `<MAX_POWER>` must be either number of maximum measured dose
* `<MIN_POWER>` must be either number of minimum measured dose
* `<NODE_ID>` can be as point identifier
* `<POWER>` must be either `"Ci"` (Curie) or `"Bq"` (Becquerel)
* `<YYYY-MM-DD>` can be as date test (it's advisable to follow the example format)

For values `<AVERAGE_POWER>` and `<MIN_POWER>` use negative value
if you want to specify value less than declared.

## Possible problems

Downloading [geopoints] isn't optimized and with a large number can stop script execution.

## Licensing

Website is licensed under the [License].

# 
