//================= CUSTOM ERROR CLASSES =======================

export class NetworkError extends Error {
  constructor(message: string) {
    // Accept an error message
    super(message); // Pass message to the built-in Error class
    this.name = "NetworkError"; // Set the name of the error type
  }
}

// Create a custom error class for data-related failures
export class DataError extends Error {
  constructor(message: string) {
    // Accept an error message
    super(message); // Pass message to the built-in Error class
    this.name = "DataError"; // Set the name of the error type
  }
}

//================FETCH PRODUCT CATALOG========================

export const fetchProductCatalog = function (): Promise<
  { id: number; name: string; price: number }[] // This Promise resolves to an array of product objects
> {
  return new Promise(function (resolve, reject) {
    // Create a new Promise
    setTimeout(function () {
      // Delay execution to simulate a slow network request
      if (Math.random() < 0.8) {
        // 80% chance of success
        resolve([
          { id: 1, name: "Laptop", price: 1200 }, // First product
          { id: 2, name: "Headphones", price: 200 }, // Second product
        ]);
      } else {
        // 20% chance of failure
        reject(new NetworkError("Failed to fetch product catalog")); // Reject with custom network error
      }
    }, 1000); // Simulate 1 second delay
  });
};

//=================FETCH PRODUCT REVIEW=========================

export const fetchProductReviews = function (
  // Define a function that simulates fetching reviews for a specific product
  productId: number // The product ID being requested
): Promise<{ Id: number; ratings: number; review: string }[]> {
  // Promise resolves to an array of reviews
  return new Promise(function (resolve, reject) {
    // Create a new Promise
    setTimeout(function () {
      // Add delay to simulate network lag
      if (productId <= 0) {
        // If an invalid ID was provided
        reject(new DataError(`Invalid product ID: ${productId}`)); // Reject with custom data error
        return; // Stop execution
      }

      if (Math.random() < 0.7) {
        // 70% chance of success
        resolve([
          { Id: productId, ratings: 5, review: "Above adverage product" }, // First review
          { Id: productId, ratings: 4, review: "Below Adverage product" }, // Second review
        ]);
      } else {
        // 30% chance of failure
        reject(
          new NetworkError( // Reject with custom network error
            `Failed to fetch reviews for product ID ${productId}`
          )
        );
      }
    }, 1500); // Simulate 1.5-second delay
  });
};

//==================FETCH SALES REPORT==============================

export const fetchSalesReport = function (
  // Define a function that simulates retrieving a sales report
  salesReport: number // A number that controls the sales data
): Promise<{ totalSales: string; unitSold: number; averagePrice: string }[]> {
  return new Promise(function (resolve, reject) {
    // Create a Promise
    setTimeout(function () {
      // Simulate server delay
      // Data-related issue
      if (salesReport <= 0) {
        // Check for invalid input
        reject(new DataError(`Invalid sales report value: ${salesReport}`)); // Reject with data error
        return;
      }

      if (Math.random() < 0.7) {
        // 70% chance of success
        resolve([
          {
            totalSales: `$${salesReport * 1000}`, // Calculate total sales
            unitSold: salesReport * 10, // Units sold
            averagePrice: `$${(salesReport * 1000) / (salesReport * 10)}`, // Sales ÷ units
          },
        ]);
      } else {
        // 30% chance of failure
        reject(new NetworkError(`Failed to fetch sales report`)); // Reject with custom error
      }
    }, 1500); // Delay of 1.5 seconds
  });
};
