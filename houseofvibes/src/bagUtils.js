// Save product to bag
export const addToBag = (product) => {
  const current = JSON.parse(localStorage.getItem("bag")) || [];
  current.push(product);
  localStorage.setItem("bag", JSON.stringify(current));
};

// Get items from bag
export const getBagItems = () => {
  return JSON.parse(localStorage.getItem("bag")) || [];
};

// Get total count
export const getBagCount = () => {
  const items = JSON.parse(localStorage.getItem("bag")) || [];
  return items.length;
};

// Get total price with discount
export const getTotalPrice = () => {
  const items = getBagItems();
  return items.reduce((total, item) => {
    const finalPrice = item.price * (1 - (item.discount || 0) / 100);
    return total + finalPrice;
  }, 0);
};

// Clear bag
export const clearBag = () => {
  localStorage.removeItem("bag");
};
