[License]: LICENSE
[geopoints]: //help.github.com/en/articles/mapping-geojson-files-on-github

# Website info

Data taken from open sources for 2018.  
The site was created with the support of the *[Leaflet](//github.com/leaflet/leaflet)*.

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
		"pu": {
			"cnt": <COUNT_STUDIES>,
			"avg": <AVERAGE_POWER>,
			"min": <MIN_POWER>,
			"max": <MAX_POWER>
		},
		"pw": <POWER>,
		"radius-size": <POINT_RADIUS>,
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
* The `"sr"` and `"pu"` objects is optional

### Notes for values:

* `<AVERAGE_POWER>` must be either number of average measured dose
* `<COUNT_TESTS>` must be either integer number of tests
* `<MAX_POWER>` must be either number of maximum measured dose
* `<MIN_POWER>` must be either number of minimum measured dose
* `<NODE_ID>` can be as point identifier
* `<POINT_RADIUS>` can be either integer number point radius
* `<POWER>` must be either `"Ci"` (Curie) or `"kBq"` (k Becquerel)
* `<YYYY-MM-DD>` can be as date test (it's advisable to follow the example format)

For values `<AVERAGE_POWER>` and `<MIN_POWER>` use negative value
if you want to specify value less than declared.

## In the long-term plans desire
You can make a pull-request with processed data from list sources, or offer a new data source.
* :earth_africa: Soviet Union
  * :white_circle: [http://chernobylgallery.com]
  * :red_circle: Ukraina: [http://chernobyl.info]
  * :yellow_circle: Russia: [http://rb.mchs.gov.ru] [[VURS](http://rb.mchs.gov.ru/folder/5061)]
* :japan: Japan: [https://emdb.jaea.go.jp](//emdb.jaea.go.jp/emdb/en/portals/1020101001/)
* :earth_americas: World: [Nuclear weapons](//www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=e4d37e29e46f40acba0b1dc719aa99cd)

[http://chernobylgallery.com]: http://chernobylgallery.com/chernobyl-disaster/radiation-levels/#attachment_2052
[http://chernobyl.info]: http://chernobyl.info/Default.aspx?tabid=197
[http://rb.mchs.gov.ru]: http://rb.mchs.gov.ru/rosgidromet/Archive/Katalog_dokumentov/Dokumenti_svjazannie_s_radiacionnim_moni/Dokumenti_svjazannie_s_radiacionnimi_ava/Dokumenty_po_avarii_na_ChAES/Atlasy/

## Possible problems

Downloading [geopoints] isn't optimized and with a large number can stop script execution.

## Licensing

Website is licensed under the [License].

# 
