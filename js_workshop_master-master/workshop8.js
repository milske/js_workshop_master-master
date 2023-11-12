var text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var data = JSON.parse(text);

function displayNames() {
  var display = document.getElementById("jsondata");
  var firstEmployee = data.employees[0];
  display.innerHTML +=
    "Name: " + firstEmployee.firstName + " " + firstEmployee.lastName + "<br>";
}

function displayAllData() {
  var display = document.getElementById("jsondata");

  for (var i = 0; i < data.employees.length; i++) {
    var employee = data.employees[i];
    display.innerHTML +=
      "Name: " + employee.firstName + " " + employee.lastName + "<br>";
  }
}

function loadRawData() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open(
    "GET",
    "http://www.omdbapi.com/?s=star+wars&apikey=ce7aa1bf",
    true
  );
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var rawJson = xmlhttp.responseText;
      document.getElementById("rawdata").innerHTML = rawJson;
    }
  };
}

function parseData() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open(
    "GET",
    "http://www.omdbapi.com/?s=star+wars&apikey=ce7aa1bf",
    true
  );
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var jsonDoc = xmlhttp.responseText;

      var jsData = JSON.parse(jsonDoc);

      var txt = "<table border=1>";
      for (var i = 0; i < jsData.Search.length; i++) {
        txt +=
          "<tr><td>" +
          jsData.Search[i].Title +
          "</td>" +
          "<td><img src = '" +
          jsData.Search[i].Poster +
          "'></td></tr>";
      }
      txt += "</table>";

      document.getElementById("rawdata").innerHTML = txt;
    }
  };
}
