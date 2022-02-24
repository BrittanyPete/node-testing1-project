const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const result = utils.trimProperties(input)
    expect(result).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input =  { foo: '   foo', bar: 'bar  ', baz: '  baz  '}
    const trimmed = { foo: 'foo', bar: 'bar', baz: 'baz'}
    const copy = utils.trimProperties(input)
    expect(input).not.toEqual(copy)
    expect(copy).toEqual(trimmed)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { name: ' jane '}
    const expected = { name: 'jane' }
    const result = utils.trimPropertiesMutation(input)
    expect(result).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { name: ' jane  '}
    const result  = utils.trimPropertiesMutation(input)
    expect(input).toStrictEqual(result)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [ {integer: 1}, {integer: 5}, {integer: 3}]
    const input2 = [ {integer: 1}, {integer: 5}, {integer: 7}]
    const result = utils.findLargestInteger(input)
    const result2 = utils.findLargestInteger(input2)
    expect(result).toBe(5)
    expect(result2).toBe(7)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(1)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).not.toBe(-1)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(10)
    expect(focus.odometer).toBe(10)
    focus.drive(10)
    expect(focus.odometer).toBe(20)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(300)
    expect(focus.tank).toBe(10)
    focus.drive(300)
    expect(focus.tank).toBe(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    focus.refuel(20)
    expect(focus.odometer).toBe(600)
    expect(focus.tank).toBe(20)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(20)
    expect(focus.tank).toBe(20)
    focus.refuel(1000)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(utils.isEvenNumberAsync(8)).toEqual('true')
    expect(utils.isEvenNumberAsync(2)).toEqual('true')
    expect(utils.isEvenNumberAsync(108)).toEqual('true')
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(utils.isEvenNumberAsync(3)).toEqual('false')
    expect(utils.isEvenNumberAsync(7)).toEqual('false')
    expect(utils.isEvenNumberAsync(99)).toEqual('false')
  })
})
