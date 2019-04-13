function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42
  } else {
    return 42 - blockNumber
  }
}

function distanceFromHqInFeet (blockNumber) {
   return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
  return startBlock < endBlock ? (endBlock - startBlock) * 264 : (startBlock - endBlock) * 264
}

function calculatesFarePrice (startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock)

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
      return 25;
  } else if (distance > 400) {
      return (distance - 400 ) * .02;
  } else {
      return 0;
    }
}
