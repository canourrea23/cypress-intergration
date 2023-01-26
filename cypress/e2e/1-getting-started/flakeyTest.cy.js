let count = 0
it('should fail then pass', { retries: 3 }, () => {
    count++
    expect(count).eq(2)
})
it('should fail then pass', { retries: 3 }, () => {
    let count = 0
    count++
    expect(count).eq(3)
})