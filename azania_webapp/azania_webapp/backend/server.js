const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    // res.json({ "users": ["UserOne", "UserTwo", "UsertHREE"] })

    //MAKE API CALL
    var myHeaders = new Headers();
    myHeaders.append("token", "52DFB51B-3AAE4C70-9619C792-3C1D99C3");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    fetch("https://developer.sepush.co.za/business/2.0/area?id=jhbcitypower2-13-marshalltown&test=current", requestOptions)
        .then(response => response.text())
        .then(result => {
            //RESTRUCTURE API
            result = JSON.parse(result)
            
            //GET STAGE
            const stage = result["events"][0]["note"]
            //GET NUMBER FROM STRING
            var thenum = stage.replace(/^\D+/g, '');
            var thenumInt = parseInt(thenum[0])
            thenumInt = thenumInt - 1

            //GET LATEST SCHEDULE
            var schedule = result["schedule"]["days"][0]
            const day = schedule["name"]
            schedule = schedule["stages"][thenumInt]
            // console.log(JSON.stringify({ stage }))
            res.json({"name":day, "schedule":schedule})
        })
        .catch(error => console.log('error', error));
})

app.get("/location", (req, res) => {
    res.json({ "Location": ["Mamelodi East"] })
    console.log("activated")
})


app.listen(5000, () => { console.log("Server started on port 5000") })