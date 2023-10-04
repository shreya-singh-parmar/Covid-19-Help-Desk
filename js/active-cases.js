fetch('https://disease.sh/v3/covid-19/countries/india')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("country").innerHTML = data.country;
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("flag").src = data.countryInfo.flag;
});




