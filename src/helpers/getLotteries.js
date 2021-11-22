export const getLotteries = async() => {

        const url = 'https://protected-sea-30988.herokuapp.com/https://www.lottoland.com/api/drawings'
        let response = await fetch(url)
        response = await response.json()

        return response;
        
    
}