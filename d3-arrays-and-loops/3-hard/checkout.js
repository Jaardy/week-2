let itemsList = {
  cheese: {
    weight: 500,
    cost: 3,
  },
  bread: {
    weight: 200,
    cost: 1.4,
  },
  milk: {
    weight: 1000,
    cost: 1.5,
  },
};

let checkout = {
  items: [],
  weight: 0,
  cost: 0,
  scanItems(items) {
    items.forEach((item) => {
      this.items.push(item);
      this.weight += item.weight;
      this.cost += item.cost;
    });
  },
  removeItem(item) {
    let index = this.items.indexOf(item);
    this.weight -= item.weight;
    this.cost -= item.cost;
    this.items.splice(index, 1);
  },
  finalise() {
    //cheese - buy 2, save a £1
    return finalCost;
  },
};
