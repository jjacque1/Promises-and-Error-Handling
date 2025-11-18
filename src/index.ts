import {
  fetchProductCatalog, // Import the function that fetches product catalog data
  fetchProductReviews, // Import the function that fetches product reviews
  fetchSalesReport, // Import the function that fetches the sales report
} from "./apiSimulator"; // All these functions come from apiSimulator.ts

// Main function that will run the application logic
function runApplication(): void {


  //========IMPLEMENT ERROR HANDLING ON fetchProductCatalog===============

  fetchProductCatalog() // Call the API function (returns a Promise)
    .then(function (catalog) {
      // Runs if the Promise resolves successfully
      console.log("Product Catalog:", catalog); // Log the product catalog to the consol
    })
    .catch(function (error) {
      // Runs if the Promise rejects (error occurs)
      console.log("Catalog Error:", error); // Display the error message
    })
    .finally(function () {
      // Runs no matter what (success or failure)
      console.log("fetchProductCatalog has been attempted"); // Status message
    });



  //========IMPLEMENT ERROR HANDLING ON fetchProductReviews===============

  fetchProductReviews(1) // Call the API function with productId = 1
    .then(function (reviews) {
      // Runs if Promise resolves
      console.log("Product Reviews:", reviews); // Display reviews for product 1
    })
    .catch(function (error) {
      // Runs if Promise rejects
      console.log("Reviews Error:", error); // Display error message
    })
    .finally(function () {
      // Runs no matter what
      console.log("fetchProductReviews has been attempted"); // Status message
    });




  //========IMPLEMENT ERROR HANDLING ON fetchSalesReport===============

  fetchSalesReport(5) // Call the API function with salesReport = 5
    .then(function (salesReport) {
      // Runs when Promise resolves
      console.log("Sales Report:", salesReport); // Display the sales report
    })
    .catch(function (error) {
      // Runs if Promise rejects

      console.log("Sales Report Error:", error); // Display error message
    })
    .finally(function () {
      // Always runs at the end
      console.log("fetchSalesReport has been attempted."); // Status message
    });
}

// Call the main function so the application actually runs
runApplication();
