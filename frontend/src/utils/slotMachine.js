import { reels, prizes } from "constants/reel";
//Math.floor(Math.random() * Math.floor(10))

export default function spin() {
  const reelsResult = randomReels();
  return checkPrize(reelsResult);
}

function randomReels() {
  return reels.map((reel) => {
    return reel[Math.floor(Math.random() * Math.floor(reel.length))];
  });
}

function checkPrize(reel) {
  const reelMap = {};

  reel.forEach(
    (fruit) => (reelMap[fruit] = reelMap[fruit] ? reelMap[fruit] + 1 : 1)
  );

  const prizeResult = prizes.find(
    (prize) => reelMap[prize.fruit] === prize.value
  );

  return { reel, prize: { ...prizeResult } };
}
