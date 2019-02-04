export const displayNames = arr => {
  if (Array.isArray(arr)) {
    arr.forEach(name => console.log(`Name is ${name}`));
  }
};

export const trololo = () => {
  return {
    name: "trololo",
    surname: "bich",
    age: 44,
    address: {
      street: "sosiPisun",
      city: "Zalupkino"
    }
  };
};
