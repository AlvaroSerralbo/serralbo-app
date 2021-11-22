export const getLotteriesDates = async( activeLottery ) => {

    const url = `https://protected-sea-30988.herokuapp.com/https://www.lottoland.com/api/drawings/${encodeURI(activeLottery)}`
    let response = await fetch(url)
    response = await response.json()

    return response;
    
}