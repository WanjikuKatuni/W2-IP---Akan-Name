//getting day of the week
const getDay = function(date){
    const parts = date.toString().split("/")

    if(parts.length !=3){
        alert("not a valid date")
    }

    const dd = parts[0]
    const mm = parts[1]

    console.log(parts[2])

        if(parts[2].length !=4){
            alert("wrong date format")
        }
    const cc = parts[2][0] + parts[2][1]
    const yy = parts[2][2] + parts[2][3]

        const d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
        return d
    }


const submit =function(event){
    // console.log("here")
    //stopformsubmission
    event.preventDefault()
    const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    const femaleNames = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    const formDate = document.getElementById('date').textContent
    const formGender = document.getElementById('gender').value
    
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

// const form = document.querySelector('#akanform')
// form.addEventListener('submit', submit(event))
