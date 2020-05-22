const jsonfiles = [
	'ru-BA.geojson',
	'ru-CU.geojson',
	'ru-ME.geojson',
	'ru-MO.geojson'
];

const palette = {
	// Color depending on activity radionuclides value kBq/m2
	soilPollution: {
		'+1450': '#800026',
		'+900': '#bd0026',
		'+550': '#e31a1c',
		'+350': '#fc4e2a',
		'+150': '#fd8d3c',
		'+50': '#feb24c',
		'+10': '#fed976',
		'+0': '#ffeda0'
	}
};

if (L.Browser.ie) {
	frame.innerHTML = '<article><h1></h1></article>';
	frame.className = 'ie';
}
