
exports.seed = async function(knex) {
  await knex("cars").insert([
    {VIN: "b8175", make: "Ford", model: "Focus", mileage: 5000, transmission: "idk", title: "clean"},
    {VIN: "y4943", make: "GMC", model: "Envoy", mileage: 2000, transmission: "idk", title: "clean"},
    {VIN: "r4793", make: "Nissan", model: "Ultima", mileage: 5434, transmission: "idk", title: "clean"},
    {VIN: "b3743", make: "VW", model: "Passat", mileage: 52523, transmission: "idk", title: "dirty"},
    {VIN: "s2343", make: "Buick", model: "LeSabre", mileage: 28384, transmission: "idk", title: "clean"}
  ])
};
