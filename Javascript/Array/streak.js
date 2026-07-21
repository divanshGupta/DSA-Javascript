function streak(array) {
  let currentStreak = 0;
  let longestStreak = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      currentStreak++;
    } else {
      longestStreak = currentStreak;
      currentStreak = 0;
    }
  }
  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }

  return console.log(currentStreak, longestStreak);
}

streak([1, 22, 0, 3, 4, 7, 8, 0, 1]);
