export const getLotteryTable = async( activeLottery, selected ) => {

    var [year, month, day] = selected.split('-')
    const url = `https://protected-sea-30988.herokuapp.com/https://www.lottoland.com/api/drawings/${encodeURI(activeLottery)}/${year}${month}${day}`
    let response = await fetch(url)
    response = await response.json()

    return response;
    
}