/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 1656076800000,
		price: 20,
		category: 'Travel',
		itemName: 'Airline',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const response = [];
  transactions.forEach((transaction) => 
  {
    let responsecategory = response.find((item) => item.category === transaction.category);

    if(responsecategory)
    {
      response.find((item) => item.category === transaction.category ).totalSpent += transaction.price;
    }
    else{
      response.push(
        {
          category: transaction.category,
          totalSpent: transaction.price
        }
      );
    }
  });
  return response;
}

module.exports = calculateTotalSpentByCategory;
