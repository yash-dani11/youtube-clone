export const numberFormatter = (num)=>{
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
    ];
    const item = lookup.findLast(item => num >= item.value);
    return item ? `${(num / item.value).toFixed(1)}${item.symbol}`:"";
  }

  
 export const getTimeString = (time) => {
    const publishedTime = new Date(time);
    const currentTime = new Date(Date.now());
    
    let year = currentTime.getFullYear() - publishedTime.getFullYear();
    let month = currentTime.getMonth() - publishedTime.getMonth();
    let day = currentTime.getDate() - publishedTime.getDate();
    let hour = currentTime.getHours() - publishedTime.getHours();
    let minute = currentTime.getMinutes() - publishedTime.getMinutes();
    let second = currentTime.getSeconds() - publishedTime.getSeconds();

    if(second < 0){
      minute--;
      second+=60;
    }
     
    if(minute < 0){
      hour--;
      minute+=60;
    }
    if(hour < 0){
      day--;
      hour+=24;
    }
    
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
    } else if(day > 0) {
      timeString = `${day} day${day > 1 ? 's' : ''}`;
    } else if(hour > 0){
      timeString = `${hour} hour${hour > 1 ? 's' : ''}`;
    } else if(minute > 0){
      timeString = `${minute} minute${minute > 1 ? 's' : ''}`;
    } else if(second > 0){
      timeString = `${second} second${second > 1 ? 's' : ''}`;
    }

    return timeString;
}

