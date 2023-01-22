function wrapping(gifts) {
  const newGifts = [];
  gifts.map((g) => {
    let word = "*" + g + "*";
    word =
      "*".repeat(word.length) + "\n" + word + "\n" + "*".repeat(word.length);

    newGifts.push(word);
  });

  return newGifts;
}
