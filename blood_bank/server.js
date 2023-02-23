const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000



const donor = {
    'donar1':{
        'fname':'anmol' ,
        'lname':'srivastava',
        'dob':'28-03-2002' ,
        'gender':'M' ,
        'username':'anmol123',
        'passwd':'hellohello' ,
        'blood_group':'B+' ,
        'city': 'chandigarh'
    },
    'donar2':{
        'fname': 'pappu',
        'lname': 'singh',
        'dob': '16-08-2002',
        'gender': 'M',
        'username': 'pappuji12',
        'passwd':'hihihihi' ,
        'blood_group':"B+" ,
        'city': 'chandigarh'
    },
    'donar3':{
        'fname': 'akash',
        'lname': 'maurya',
        'dob': '16-03-1999',
        'gender': 'M',
        'username': 'akashjiji',
        'passwd': 'hellothere',
        'blood_group': 'A+',
        'city': 'Delhi'
    },
    'donar4':{
        'fname':'dhruv',
        'lname': 'saxena',
        'dob': '24-08-2004',
        'gender': 'M',
        'username': 'saxena123',
        'passwd': 'saxenasaxena' ,
        'blood_group': 'A+',
        'city': 'chandigarh'
    },

    'donar5':{
        'fname': 'piyush',
        'lname': 'singh',
        'dob': '06-04-2002',
        'gender': 'M',
        'username': 'sunnysingh',
        'passwd': 'singhpiyush',
        'blood_group': 'O+' ,
        'city': 'Delhi'
    },
    'donar6':{
        'fname': 'harsh',
        'lname': 'srivastava',
        'dob': '23-07-2003',
        'gender': 'M',
        'username': 'harshuhere',
        'passwd': '121234',
        'blood_group': 'O-',
        'city': 'varanasi'
    },
    'donar7':{
        'fname':'sia' ,
        'lname': 'sharma',
        'dob': '29-01-2003',
        'gender': 'F',
        'username':'siasharma' ,
        'passwd': 'sharmasharma',
        'blood_group': 'AB+',
        'city': 'Delhi'
    },
    'donar8':{
        'fname': 'khushi',
        'lname': 'pandey',
        'dob': '14-04-2002',
        'gender': 'F',
        'username': 'pandeykhushi',
        'passwd': 'pandey01',
        'blood_group': 'B+',
        'city':'Varanasi' 
    }
}
const rappers = {
    '21 Savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    
    'raftar':{
        'age': 34,
        'birthName': 'Dilin Nair',
        'birthLocation': 'Trivandrum, Kerala, India'
    },

    '21 Savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'badshah':{
        'age': 37,
        'birthName': 'Aditya Prateek Singh Sisodia',
        'birthLocation': 'Delhi, India'
    },

    'honey singh':{
        'age': 39,
        'birthName': 'Hirdesh Singh',
        'birthLocation': 'Karampura, New Delhi, India'
    },

    'eminen':{
        'age': 50,
        'birthName': 'Marshall Bruce Mathers',
        'birthLocation': 'Missouri, U.S.'
    },

    'unknown':{
        'age': 'Not Found',
        'birthName': 'Not Found',
        'birthLocation': 'Not Found'
    }

}

app.get('/Page1',(request, response)=>{
    response.sendFile(__dirname + '/page1.html')
})

app.get('/api/donor:',(request, response)=>{
   const username =  request.params.username.toLowerCase()
//    console.log(rappers[rapperName].age)
    // response.json(rapperName)

    if(donor[username]){
        if(donor[passwd]){
            console.log('login successful')
        }
    }
    else{
        console.log('Invalid credentials')
    }
})

app.listen(PORT,()=>{
console.log(`The server is running on port ${PORT}! Better Go Catch It!`)
})