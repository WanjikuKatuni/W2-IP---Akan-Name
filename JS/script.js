const submit =function(){
    const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    const femaleNames = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

}
//getting day of the week
const getDay = function(date){
    const parts = date.split('/')

    if(parts.length !=3){
        alert("not a valid date")
    }

    const dd = parts[0]
    const mm = parts[1]

    if(parts[2].length !=4){
        alert("wrong date format")
    }
    const cc = parts[2][0] + parts[2][1]
    const yy = parts[2][2] + parts[2][3]

    const d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    return d
}