//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {



//show and hide regulated market 
$(document).ready(function () {
  // Code snippet for the regulated market  page
  $('#second-market-link').click(function() {
    $('#second-market').show();
    $('#second-market-link').hide();
    return false;
  });
  $('#third-market-link').click(function() {
    $('#third-market').show();
    $('#third-market-link').hide();
    return false;
  });       
})



  // Add JavaScript here
})
