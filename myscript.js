let who = prompt("Who is there?")

if (who === "Admin") {
      var login = prompt("Password")
}
else if (who === null) {
      alert("Canceled")
}
else {
      alert("I don't know you.")
}

if (login === "Password") {
      alert("Welcome!")
}
else if (login === null) {
      alert("Cancelled")
}
else {
      alert("Wrong Password.")
}