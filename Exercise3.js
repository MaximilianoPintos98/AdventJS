const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  let giftPackageWeight = 0,
    weightForReindeer = 0,
    difference = 0;

  if (packOfGifts || reindeers) {
    packOfGifts.forEach(
      (pack) => (giftPackageWeight = giftPackageWeight + pack.length)
    );
    reindeers.forEach(
      (r) => (weightForReindeer = weightForReindeer + r.length * 2)
    );
    difference = weightForReindeer / giftPackageWeight;

    return Math.floor(difference);
  }
}

distributeGifts(packOfGifts, reindeers);
