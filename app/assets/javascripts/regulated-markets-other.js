var countries = [
  'Israel - Tel Aviv Stock Exchange',
  'Japan - Fukuoka Stock Exchange',
  'Japan - Nagoya Stock Exchange',
  'Japan - Osaka Securities Exchange',
  'Japan - Sapporo Securities Exchange',
  'Japan - Tokyo Stock Exchange',
  'Switzerland - BX Berne Exchange',
  'Switzerland - SIX Swiss Exchange',
  'United States of America (USA) - BATS Exchange, Inc.',
  'United States of America (USA) - BATS Y-Exchange, Inc.',
  'United States of America (USA) - BOX Options Exchange LLC',
  'United States of America (USA) - C2 Options Exchange, Incorporated',
  'United States of America (USA) - Chicago Board Options Exchange, Incorporated',
  'United States of America (USA) - Chicago Stock Exchange, Inc.',
  'United States of America (USA) - EDGA Exchange, Inc.',
  'United States of America (USA) - EDGX Exchange, Inc.',
  'United States of America (USA) - International Securities Exchange, LLC',
  'United States of America (USA) - ISE Gemini LLC',
  'United States of America (USA) - Miami International Securities Exchange LLC',
  'United States of America (USA) - NASDAQ OMX BX, Inc.',
  'United States of America (USA) - NASDAQ OMX PHLX LLC',
  'United States of America (USA) - The NASDAQ Stock Market LLC',
  'United States of America (USA) - National Stock Exchange, Inc.',
  'United States of America (USA) - New York Stock Exchange LLC',
  'United States of America (USA) - NYSE Arca, Inc.',
  'United States of America (USA) - NYSE MKT LLC'
]
var element = document.querySelector('#market')
var elementTwo = document.querySelector('#marketTwo')
var elementThree = document.querySelector('#marketThree')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementTwo, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementThree, id: id, source: countries, name: "marketAppoint"})



