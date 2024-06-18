export const numberFormatter = (num)=>{
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
    ];
    const item = lookup.findLast(item => num >= item.value);
    return item ? `${Math.round(((num / item.value)*10)/10)}${item.symbol}`:"";
  }

  
 export const getTimeString = (time) => {
    const publishedTime = new Date(time);
    const currentTime = new Date(Date.now());
    
    let year = currentTime.getFullYear() - publishedTime.getFullYear();
    let month = currentTime.getMonth() - publishedTime.getMonth();
    let day = currentTime.getDate() - publishedTime.getDate();
    
    
    if (day < 0) {
      month--;
      const daysInPreviousMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
      day += daysInPreviousMonth;
    }
    
    
    if (month < 0) {
      year--;
      month += 12;
    }
    
    let timeString = "";
    
    if (year > 0) {
      timeString = `${year} year${year > 1 ? 's' : ''}`;
    } else if (month > 0) {
      timeString = `${month} month${month > 1 ? 's' : ''}`;
    } else {
      timeString = `${day} day${day > 1 ? 's' : ''}`;
    }
    return timeString;
}

