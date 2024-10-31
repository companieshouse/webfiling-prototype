//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here




router.post('/choose-design', function(request, response) {
    response.redirect("/conf-statement-enhancement/psc-exemptions/trading-on-a-market")
})




router.post('/trading-on-a-market', function(request, response) {

    var statement = request.session.data['statement']
    if (statement == "no"){
        response.redirect("/conf-statement-enhancement/psc-exemptions/confirmation-statement-accordion")
    } else {
        response.redirect("/conf-statement-enhancement/psc-exemptions/dtr5")
    }
})






router.post('/exempt-reason-autocomplete', function(request, response) {
    response.redirect("/conf-statement-enhancement/psc-exemptions/choose-market-autocomplete")
})


router.post('/exempt-status', function(request, response) {

    var exempt = request.session.data['exempt']
    if (exempt == "no"){
        response.redirect("/conf-statement-enhancement/psc-exemptions/confirmation-statement-accordion")
    } else {
        response.redirect("/conf-statement-enhancement/psc-exemptions/exempt-reason-autocomplete")
    }
})


router.post('/exemptions-check-answers', function(request, response) {

    var addMarket = request.session.data['addMarket']
    if (addMarket == "yes"){
        response.redirect("/conf-statement-enhancement/psc-exemptions/exempt-reason-autocomplete")
    } else {
        response.redirect("/conf-statement-enhancement/psc-exemptions/confirmation-statement-accordion")
    }
})


