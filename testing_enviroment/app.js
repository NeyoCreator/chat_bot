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
  .then(result => console.log(result))
  .catch(error => console.log('error', error));