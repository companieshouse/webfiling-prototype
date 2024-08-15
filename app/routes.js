//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/choose-design', function(request, response) {
    response.redirect("/conf-statement-enhancement/psc-exemptions/exempt-status")
})

router.post('/exempt-status', function(request, response) {

    var design = request.session.data['design']
    if (design == "autocomplete"){
        response.redirect("/conf-statement-enhancement/psc-exemptions/exempt-reason-autocomplete")
    } else {
        response.redirect("/conf-statement-enhancement/psc-exemptions/exempt-reason")
    }
})

