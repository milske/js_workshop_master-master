if (localStorage.getItem("nameList") == null) {
  var names = [];
  localStorage.setItem("nameList", JSON.stringify(names));
}
function saveData() {
  names = JSON.parse(localStorage.getItem("nameList"));

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  // Create JSON object

  var fullName = {
    fname: firstName,
    lname: lastName,
  };

  // Save it to list
  names.push(fullName);
  //save list to localStorage
  localStorage.setItem("namelist", JSON.stringify(names));

  showData();
}

function showData() {
  var allNames = localStorage.getItem("nameList");
  var jsonNames = JSON.parse(allNames);
  var text = "";

  for (var i = 0; i < jsonNames.length; i++) {
    text +=
      "Nro:" +
      i +
      "Firstname: " +
      jsonNames[i].fname +
      "Lastname: " +
      jsonNames[i].lname +
      "<br>";
  }

  var place = document.getElementById("storage_place");
  place.innerHTML = text;
}

function deleteData() {
  var delNum = document.getElementById("delNumber").value;

  var myNames = localStorage.getItem("nameList");
  var jsonNames = JSON.parse(myNames);
  jsonNames.splice(delNum, 1);

  localStorage.setItem("nameList", JSON.stringify(jsonNames));
  showData();
}
