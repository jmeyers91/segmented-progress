
module.exports = function segmentedProgress(value, total, segmentCount) {
  if(value < 0) value = 0;
  else if(value > total) value = total;

  const ratio = 100 * value / total;
  const segments = [];
  const segmentLength = 100 / segmentCount;

  for(let i = 0; i < segmentCount; i++) {
    const segmentOffset = i * segmentLength;
    const segmentValue = Math.max(Math.min(segmentLength, ratio - segmentOffset), 0);
    segments.push(segmentValue / segmentLength);
  }
  
  return segments;
};
