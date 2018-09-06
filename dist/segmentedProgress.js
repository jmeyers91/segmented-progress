"use strict";

module.exports = function segmentedProgress(value, total, segmentCount) {
  if (value < 0) value = 0;else if (value > total) value = total;

  var ratio = 100 * value / total;
  var segments = [];
  var segmentLength = 100 / segmentCount;

  for (var i = 0; i < segmentCount; i++) {
    var segmentOffset = i * segmentLength;
    var segmentValue = Math.max(Math.min(segmentLength, ratio - segmentOffset), 0);
    segments.push(segmentValue / segmentLength);
  }

  return segments;
};