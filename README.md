# Segmented Progress

A simple utility function for getting segmented progress bar values.

# Install

```
npm install @simplej/segmented-progress
```

# Usage

```
import segmentedProgress from '@simplej/segmented-progress';

const progress = 0.75;
const total = 1;
const segmentCount = 10;

const segments = segmentedProgress(progress, total, segmentCount);
// segments === [1, 1, 1, 1, 1, 1, 1, 0.5, 0, 0]
```
