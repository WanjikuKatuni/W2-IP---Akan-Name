//getting day of the week
const getDay = function(date){
    const parts = date.split("/")

    if(parts.length !=3){
        alert("not a valid date")
    }
    var dt = new Date(date)
    const dd = parts[0]
    const mm = parts[1]
    if(parts[2].length != 4 || mm < 1 || mm > 12){
        alert("wrong date format")
    }

    return dt.getDay()
    }


const logSubmit = function (event){
    
    //stopformsubmission
    event.preventDefault()

    const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    const femaleNames = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    const formDate = document.getElementById('date').value
    const formGender = document.getElementById('gender').value

    if(formDate === "" || formGender === "") {
        alert("required fields are empty")
    }
    
    const day = getDay(formDate)

    var akanName = ""

    if (formGender === 'M') {
        akanName = maleNames[day]
    }
    else {
        akanName = femaleNames[day]
    }
    alert('Your Akan Name is ' + akanName)
}

const form = document.getElementById('akanform')
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit)
