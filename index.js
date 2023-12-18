function findMatching(arr, driver) {
    let lowercaseddriver = driver.toLowerCase()
    return arr.filter(function (name) {
        let lowercasedname = name.toLowerCase()
        return lowercasedname.includes(lowercaseddriver);
    });
}
function fuzzyMatch(arr, letters) {
    const lowercasedLetters = letters.toLowerCase();

    return arr.filter(function (driver) {
        const lowercasedDriver = driver.toLowerCase();
        return lowercasedDriver.startsWith(lowercasedLetters);
    });
}
function matchName(arr, name) {
    const lowercasedname = name.toLowerCase()
    return arr.filter(function(driver){
        return driver.name === name
    })
}
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


console.log(matchName(drivers,"Bobby"))
