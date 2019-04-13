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
  if (distanceTravelledInFeet(startBlock, endBlock) > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelledInFeet(startBlock, endBlock) > 2000) {
      return 25;
  } else if (distanceTravelledInFeet(startBlock, endBlock) > 400) {
      return (distanceTravelledInFeet(startBlock, endBlock) - 400 ) * 2;
  } else {
      return 0;
    }
}
