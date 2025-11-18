import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";


function runApplication(): void {

  //========IMPLEMENT ERROR HANDLING ON fetchProductCatalog===============

fetchProductCatalog()
.then(function (catalog) {
    console.log("Product Catalog:", catalog);
})
.catch(function (error) {
    console.log("Catalog Error:", error)
})
.finally(function () {
    console.log("fetchProductCatalog has been attempted")
})


//========IMPLEMENT ERROR HANDLING ON fetchProductReviews===============

fetchProductReviews(1)
.then(function (reviews) {
    console.log("Product Reviews:", reviews);
})
.catch(function (error) {
    console.log("Reviews Error:", error)
})
.finally(function () {
    console.log("fetchProductReviews has been attempted")
})


//========IMPLEMENT ERROR HANDLING ON fetchSalesReport===============

fetchSalesReport(5)
  .then(function (salesReport) {
    console.log("Sales Report:", salesReport);
  })
  .catch(function (error) {
    console.log("Sales Report Error:", error);
  })
  .finally(function () {
    console.log("fetchSalesReport has been attempted.");
  });

}

runApplication();






















































