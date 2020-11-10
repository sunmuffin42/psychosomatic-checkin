document = new Document()

form1 = document.getElementById("form1")
console.log(form1)
document.append(`
    <input type="date" id="date">
`, form1)