var countries = [
  'Germany - Baden-Wuerttembergische Wertpapierboerse',
  'Germany - Baden-wuerttembergische Wertpapierboerse (Regulierter Markt - Technical Platform 2)',
  'Germany - Baden-wuerttembergische Wertpapierboerse (Regulierter Markt)',
  'Germany - Boerse Berlin (Berlin Second Regulated Market)',
  'Germany - Boerse Berlin (Regulierter Markt)',
  'Germany - Boerse Berlin Equiduct Trading (Berlin Second Regulated Market)',
  'Germany - Boerse Berlin Equiduct Trading (Regulierter Markt)',
  'Germany - Boerse Hamburg Lang and Schwarz Exchange (Regulierter Markt)',
  'Germany - Boerse Muenchen - Gettex - Regulierter Markt',
  'Germany - Boerse Muenchen (Regulierter Markt)',
  'Germany - Duesseldorfer Boerse (Regulierter Markt)',
  'Germany - Duesseldorfer Boerse Quotrix (Regulierter Markt)',
  'Germany - Eurex Deutschland',
  'Germany - European Energy Exchange',
  'Germany - European Energy Exchange (Regulierter Markt)',
  'Germany - Frankfurter Wertpapierboerse (Regulierter Markt - Off-book)',
  'Germany - Frankfurter Wertpapierboerse (Regulierter Markt)',
  'Germany - Frankfurter Wertpapierboerse Xetra (Reguliertermarkt – Off-book)',
  'Germany - Hanseatische Wertpapierboerse Hamburg (Regulierter Markt',
  'Germany - Niedersaechsiche Boerse Zu Hannover (Regulierter Markt)',
  'Germany - Tradegate Exchange (Regulierter Markt)',
  'Germany - Xetra (Regulierter Markt)'
]
var element = document.querySelector('#market')
var elementTwo = document.querySelector('#marketTwo')
var elementThree = document.querySelector('#marketThree')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementTwo, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementThree, id: id, source: countries, name: "marketAppoint"})
