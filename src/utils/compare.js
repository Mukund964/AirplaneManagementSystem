function compareTime (dateTime1,dateTime2){
    let date1 = new Date(dateTime1);
    let date2 = new Date(dateTime2);
    
    return (date1.getDate() > date2.getDate());
}

module.export = {
    compareTime
};