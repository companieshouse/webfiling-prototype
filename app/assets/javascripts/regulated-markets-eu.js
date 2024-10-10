var countries = [
  'Austria - Wiener Börse Ag',
  'Belgium - Euronext Brussels Derivatives',
  'Belgium - Euronext Brussels',
  'Bulgaria - Bulgarian Stock Exchange Main Market',
  'Bulgaria - Bulgarian Stock Exchange Base',
  'Bulgaria - Bulgarian Stock Exchange International',
  'Croatia - Zagrebačka Burza D.d.',
  'Cyprus - Cyprus Stock Exchange',
  'Czechia - Burza Cenných Papírů Praha, A.s.',
  'Czechia - Rm-systém, Česká Burza Cenných Papírů A.s.',
  'Denmark - NASDAQ Copenhagen A/s',
  'Denmark - NASDAQ Copenhagen A/s - Nordic@mid',
  'Denmark - NASDAQ Copenhagen - Auction On Demand',
  'Estonia - NASDAQ Tallinn Aktsiaselts',
  'Finland - NASDAQ Helsinki Oy',
  'Finland - NASDAQ Helsinki Oy - Auction On Demand',
  'Finland - NASDAQ Helsinki Oy - Nordic@mid',
  'France - Monep',
  'France - Euronext Paris Sa',
  'France - Matif',
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
  'Germany - Xetra (Regulierter Markt)',
  'Greece - Electronic Secondary Securities Market',
  'Greece - Hellenic Exchanges - Athens Stock Exchange Sa (Cash Market)',
  'Greece - Hellenic Exchanges - Athens Stock Exchange Sa (Derivatives Market)',
  'Greece - Henex Derivatives Market',
  'Greece - Hellenic Exchanges - Athens Stock Exchange S.a.',
  'Greece - Henex',
  'Hungary - Hudex Energiatőzsde Zrt.',
  'Hungary - Budapesti Értéktőzsde Zrt. (Budapest Stock Exchange)',
  'Iceland - NASDAQ Iceland Hf.',
  'Ireland - Euronext Dublin',
  'Italy - Borsa Italiana S.p.a. - Etfplus',
  'Italy -Borsa Italiana S.p.a. - Mot',
  'Italy - Borsa Italiana S.p.a. - Idem',
  'Italy - Mts S.p.a. - Mts Italia',
  'Italy - Borsa Italiana S.p.a. - Euronext Milan',
  'Italy - Borsa Italiana S.p.a. - Euronext Miv Milan',
  'Latvia - NASDAQ Riga As',
  'Lithuania - NASDAQ Vilnius, Ab',
  'Luxembourg - Bourse De Luxembourg',
  'Malta - Malta Stock Exchange',
  'Malta - Institutional Financial Securities Market',
  'Netherlands - Nxchange B.v.',
  'Netherlands - Ice Endex Markets B.v.',
  'Netherlands - Euronext Eqf, Equities And Indices Derivatives',
  'Netherlands - Euronext Com, Commodities Futures And Options',
  'Netherlands - Cme Amsterdam B.v.',
  'Netherlands - Cboe Europe B.v.',
  'Netherlands - Euronext Amsterdam N.v.',
  'Norway - Fish Pool Asa',
  'Norway-  NASDAQ Oslo Asa',
  'Norway- Norexeco Asa',
  'Norway - NASDAQ Oslo Asa - Nordic Power Derivatives And European Union Allowances',
  'Norway - NASDAQ Oslo Asa - European Power And Gas Derivatives',
  'Norway- NASDAQ Oslo Asa - Swedish Electricity Certificate',
  'Norway - Euronext Expand Oslo',
  'Norway - Oslo Børs Main Market',
  'Norway - Oslo Børs Derivatives Market',
  'Poland - Giełda Papierów Wartościowych W Warszawie S.a.',
  'Poland - Towarowa Giełda Energii S.a.',
  'Poland - Bondspot S.a.',
  'Portugal - Euronext - Mercado De Futuros E Opções',
  'Portugal - Omip - Pólo Português, S.g.m.r., Sa',
  'Portugal - Euronext Lisbon - Sociedade Gestora De Mercados Regulamentados, Sa',
  'Romania - Bursa De Valori Bucuresti Sa',
  'Romania - Bursa De Valori București Sa',
  'Slovakia - Burza Cenných Papierov V Bratislave, A.s.',
  'Slovenia - Ljubljana Stock Exchange Inc.',
  'Spain - Mercado De Renta Fija, Aiaf',
  'Spain - Mercado Electrónico De Renta Fija, Merf',
  'Spain - Bolsa De Barcelona',
  'Spain - Bolsa De Bilbao',
  'Spain - Bolsa De Valencia',
  'Spain - Bolsa De Madrid',
  'Spain - Meff',
  'Sweden - NASDAQ Stockholm Ab - Eur Wb Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Finnish Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab',
  'Sweden - NASDAQ Stockholm Ab - Danish Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Eur Fi Derivated',
  'Sweden - NASDAQ Stockholm Ab - Usd Wb Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Norwegian Fi Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Danish Fi Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Nordic@mid',
  'Sweden - NASDAQ Stockholm Ab - Norwegian Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Auction On Demand',
  'Sweden - NASDAQ Stockholm Ab - Swedish Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Norway Etf',
  'Sweden - Nordic Growth Market - Main Regulated',
  'Sweden - NASDAQ Stockholm Ab - Gbp Wb Eq Derivatives',
  'Sweden - NASDAQ Stockholm Ab - Sewb',
  'Sweden - NASDAQ Stockholm Ab - Nowb',
  'Sweden - NASDAQ Stockholm Ab - Dkwb'
]
var element = document.querySelector('#market')
var elementTwo = document.querySelector('#marketTwo')
var elementThree = document.querySelector('#marketThree')
var id = 'autocomplete-default'
accessibleAutocomplete({element: element, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementTwo, id: id, source: countries, name: "marketAppoint"})
accessibleAutocomplete({element: elementThree, id: id, source: countries, name: "marketAppoint"})


