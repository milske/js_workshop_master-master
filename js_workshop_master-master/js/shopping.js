var x = document.getElementById("hidebox");
x.style.display = "none";

function validateForm() {
  var email = document.forms.myForm.email.value;
  var comment = document.forms.myForm.comment.value;

  if (email.lenght < 6 || email.lenght > 15 || email.includes("@"))
    alert("Email: " + email);
  else document.forms.myForm.email.style.background = "red";
  document.getElementById("feedback").innerHTML =
    "<b>Erroneus email address</b>";

  if (comment.length > 50 || comment == "")
    document.forms.myForm.comment.style.background = "red";
  else alert("Comment: " + comment);
  return false;
}

function showExtraFields() {
  var x = document.getElementById("hidebox");
  x.style.display = "block";
}

function calculateTotalCost() {
  var selectedType = document.getElementById("type").value;
  var years = document.getElementById("years").value;

  var membership = {
    basic: 10.0,
    premium: 15.0,
    gold: 20.0,
    platinum: 25.0,
  };

  var totalCost = membership[selectedType] * years;

  if (years > 1) {
    totalCost = totalCost * 0.8;
  }

  document.getElementById("cost").value = totalCost();
}

function calculate() {
  var quantity = parseInt(document.getElementById("quantity").value);
  var price = parseFloat(document.getElementById("price").value);
  var tax = parseFloat(document.getElementById("tax").value);
  var discount = parseFloat(document.getElementById("discount").value);
  var shipping = parseFloat(document.getElementById("shipping").value);

  if (quantity > 100) {
    discount = discount * 2;
  }

  var subtotal = quantity * price;
  var taxAmount = subtotal * (tax / 100);
  var totalDiscount = subtotal * (discount / 100);
  var total = (subtotal + taxAmount - totalDiscount + shipping).toFixed(2);

  document.getElementById("total").value = total;
}
