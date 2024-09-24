var countries = [
  'United Kingdom (UK) - The London Metal Exchange',
  'United Kingdom (UK) - ICE Futures Europe',
  'United Kingdom (UK) - London Stock Exchange',
  'United Kingdom (UK) - Aquis Stock Exchange Limited',
  'United Kingdom (UK) - Cboe Europe Equities Regulated Market'
]
var element = document.querySelector('#market')
var elementTwo = document.querySelector('#marketTwo')
var elementThree = document.querySelector('#marketThree')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementTwo, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementThree, id: id, source: countries, name: "marketAppoint"})

