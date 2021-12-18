const func = require('./functions')


test ('ReturnTwo test', () => {
    expect(func.returnTwo()).toBe(2)
})

test ('greeting', () => {
    expect(func.greeting('James')).toBe('HelloJames.')
})

test ('add', () => {
    expect(func.add(20,20)).toBe(40)
})