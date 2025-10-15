// Model biasanya berisi fungsi untuk ambil data
const items = [
  { id: 1, name: "Onigiri", price: 12000 },
  { id: 2, name: "Risol Mayonaise", price: 3000 },
  { id: 3, name: "Sari Roti Coklat", price: 5500 },
  { id: 3, name: "Roti Sobek Keju", price: 10500 },
];

exports.getAllItems = () => {
  return items;
};
