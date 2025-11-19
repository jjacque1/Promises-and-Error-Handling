//===============PART 3: BUILD THE MAIN APPLICATION LOGIC=============


// Import the three API simulation functions from apiSimulator.ts.
// These functions each return a Promise that either resolves with data
// or rejects with an error.
import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";

// Define a function named fetchData.
// This function will run all API calls in sequence using Promise chaining.
function fetchData(): void {

  // 1. Start by fetching the product catalog.
  // fetchProductCatalog() returns a Promise.
  fetchProductCatalog()
    // .then() runs ONLY if the Promise was successful.
    .then((products) => {
      // Log the list of products returned from the catalog API.
      console.log("Product catalog:", products);
     
      // For each product, we want to fetch its reviews.
      // products.map(...) loops through each product and returns an array of Promises.
      const reviewPromises = products.map((product) =>
        
        // For each product, call fetchProductReviews(product.id)
        // Then attach a .then() to combine the product with its reviews in one object.
        fetchProductReviews(product.id).then((reviews) => ({
          product,   // Keep reference to the product
          reviews,   // Add its reviews
        }))
      );

      // Promise.all(reviewPromises) waits for ALL review Promises to finish.
      // It returns ONE Promise containing an array of results.
      return Promise.all(reviewPromises);
    })

    // This .then() runs after ALL product reviews are fetched.
    .then((productsWithReviews) => {

      // Loop through each product with reviews result.
      productsWithReviews.forEach(({ product, reviews }) => {
        // Log the product name and its list of reviews.
        console.log(`Product: ${product.name}, Review: ${reviews}`);
      });

      // After logging products + reviews, fetch the sales report.
      // fetchSalesReport() also returns a Promise.
      return fetchSalesReport();
    })

    // This .then() handles the result of fetchSalesReport().
    .then((salesReport) => {
      // Log the sales report to the console.
      console.log("Sales report:", salesReport);
    })

    // .catch() runs ONLY if ANY Promise failed above.
    // It catches errors from ANY of the API calls (catalog, reviews, or sales report).
    .catch((error) => {
      console.error("An error occurred during API calls:", error);
    })

    // .finally() runs NO MATTER WHAT — success or failure.
    // It always executes after the chain is complete.
    .finally(() => {
      console.log("All API calls have been attempted.");
    });
}

// Call (execute) the fetchData function.
// If this line is removed, nothing in the file will run.
fetchData();