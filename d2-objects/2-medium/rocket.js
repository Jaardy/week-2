let rocket = {
  fuel: 200,
  fuelCostToA: 20,
  fuelCostToB: 30,
  fuelCostToC: 35,
  flyToA() {
    if (this.fuel - this.fuelCostToA * 2 < 0) return false;
    this.fuel -= this.fuelCostToA * 2;
    return true;
  },
  flyToB() {
    if (this.fuel - this.fuelCostToB * 2 < 0) return false;
    this.fuel -= this.fuelCostToB * 2;
    return true;
  },
  flyToC() {
    if (this.fuel - this.fuelCostToC * 2 < 0) return false;
    this.fuel -= this.fuelCostToC * 2;
    return true;
  },
};

console.log(rocket.flyToA(), rocket.fuel);
console.log(rocket.flyToA(), rocket.fuel);
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
console.log(rocket.flyToA());
