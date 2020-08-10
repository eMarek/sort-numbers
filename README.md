## Sorting Numbers

This is basic sorting numbers exercise.

### `yarn sort:small`

This command prepares a list of 11 small numbers (<100) and then sorts them. It measures time and estimates how long it would take to execute that function 10 Billion (10^10) times on a normal machine.

Example:

```
computer:sorts-numbers marek$ yarn sort:small
yarn run v1.22.4
$ node sorting-small.js
[
  85, 64, 49, 65, 89,
  85, 21, 52, 37, 37,
  55
]
[
  21, 37, 37, 49, 52,
  55, 64, 65, 85, 85,
  89
]
Sorting 11 small numbers (<100) took 0.07002601027488708 milliseconds.
It would take 2 hours, 31 minutes, 0 seconds and 1 milliseconds to execute this function 10000000000 times.
✨  Done in 0.19s.
```

### `yarn sort:big`

This command prepares a list of 10000 powers (a^b) where a and b are random numbers between 100 and 10000 and then sorts them. It also measures how much time it takes for completion. It is quite fast since I took [logarithms](https://math.stackexchange.com/questions/2853930/comparing-powers) comparing powers approach.

Example:

```
computer:sorts-numbers marek$ yarn sort:big
yarn run v1.22.4
$ node sorting-big.js
[
  { a: 2093, b: 4721 }, { a: 2054, b: 2486 }, { a: 9074, b: 3144 },
  { a: 7798, b: 944 },  { a: 9215, b: 1881 }, { a: 4624, b: 7288 },
  { a: 208, b: 7449 },  { a: 3187, b: 2924 }, { a: 8116, b: 2505 },
  { a: 5603, b: 2871 },
  ... 9990 more items
]
[
  { a: 855, b: 101, l: 296.12857758754546 },
  { a: 409, b: 115, l: 300.3481804208443 },
  { a: 1031, b: 106, l: 319.40541852005276 },
  { a: 641, b: 120, l: 336.8229635422581 },
  { a: 217, b: 146, l: 341.1231211418853 },
  { a: 1126, b: 114, l: 347.8753765187473 },
  { a: 1368, b: 114, l: 357.5138151017871 },
  { a: 157, b: 164, l: 360.1275429951143 },
  { a: 472, b: 136, l: 363.65611181423594 },
  { a: 886, b: 124, l: 365.4817815139943 },
  ... 9990 more items
]
Sorting 10000 powers (a^b) where a and b are random numbers between 100 and 10000 took 16.518658012151718 milliseconds.
✨  Done in 0.33s.
```
