// question-11
function groupByCategory(items, categoryKey) {
    return items.reduce((grouped, item) => {
      const key = item[categoryKey];
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
      return grouped;
    }, {});
  }
  
  const products = [
    { name: 'Apple', category: 'Fruit', price: 100 },
    { name: 'Mango', category: 'Fruit', price: 125 },
    { name: 'Potato', category: 'Vegetable', price: 30 },
    { name: 'Carrot', category: 'Vegetable', price: 25 }
  ];
  
  console.log(groupByCategory(products, 'category'));