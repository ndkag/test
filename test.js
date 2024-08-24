let arrayRandom = [7, 25, 31, 4, 11];

for (let i = 0; i < 33; i++) {
  while (true) {
    let random = Math.floor(Math.random() * 33) + 1;

    if (!arrayRandom.includes(random)) {
      arrayRandom.push(random);
      break;
    }
  }

  if (arrayRandom.length === 33) {
    break;
  }
}

console.log("Sĩ Số: " + arrayRandom.length);

// Hiển thị kết quả với 3 cột
let numColumns = 3;
for (let i = 0; i < arrayRandom.length; i += numColumns) {
  console.log(arrayRandom.slice(i, i + numColumns).join(", "));
}
