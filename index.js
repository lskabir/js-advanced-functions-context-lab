/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    let newArray = arr.map(employee => {
        return createEmployeeRecord(employee)
    })
    return newArray
}

function createTimeInEvent(dateStamp) {
    let newDateStamp = dateStamp.split(' ')
    
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(newDateStamp[1]),
        date: newDateStamp[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let newDateStamp = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(newDateStamp[1]),
        date: newDateStamp[0]
    })
    return this
}

function hoursWorkedOnDate(givenDate) {
    let inTime = this.timeInEvents.find(employee => {
        return employee.date === givenDate
    })

    let outTime = this.timeOutEvents.find(employee => {
        return employee.date === givenDate
    })

    return (outTime.hour - inTime.hour) / 100
}

function wagesEarnedOnDate() {

}