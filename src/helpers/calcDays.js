// function to calc remaining time to next draw

export const calcDays = (yy, mm, dd, hh, min) => {

    const currentDay = new Date()
    const lotteryDay = new Date(yy, (mm - 1), dd, hh, min);
    let remainingTime = lotteryDay - currentDay;
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if ( days === 0 && hours === 1 ) {
        return ` ${hours} hour`    
    } else if ( days === 0 && hours > 1 ) {
        return ` ${hours} hrs` 
    } else if ( days === 1 && hours === 0 ) {
        return ` ${days} day` 
    } else if ( days === 1 && hours > 1 ) {
        return ` ${days} day ${hours} hrs` 
    } else if ( days > 1 && hours === 0 ) {
        return ` ${days} days` 
    } else if ( days > 1 && hours > 1) {
        return ` ${days} days ${hours} hrs` 
    } else if ( days > 1 && hours === 1) {
        return ` ${days} days ${hours} hour` 
    } else {
        return ` TBA` 
    }
    
}