const drivers = ['Antonia','Nuru','Amari','Mo'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    const fareMultiplier = num2 =>num*num2;
    return fareMultiplier;
}

const fareDoubler = (num)=>num*2;
const fareTripler = (num)=>num*3;
const selectDifferentDrivers = (drivers,returnLastTwoDrivers)=>(returnLastTwoDrivers(drivers));
