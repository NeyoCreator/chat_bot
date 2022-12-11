const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    // res.json({ "users": ["UserOne", "UserTwo", "UsertHREE"] })

    //MAKE API CALL
    var myHeaders = new Headers();
    myHeaders.append("token", "52DFB51B-3AAE4C70-9619C792-3C1D99C3");
    console.log(myHeaders)

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    
    fetch("https://developer.sepush.co.za/business/2.0/area?id=jhbcitypower2-13-marshalltown&test=current", requestOptions)
        .then(response => response.text())
        .then(result => res.json(result))
        .catch(error => console.log('error', error));
        

})

app.listen(5000, () => { console.log("Sever started on port 5000") })