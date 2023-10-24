const person = {
    firstName: "",
    lastName: "",
    language: "",
    setDetails(firstName, lastName, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
    },
    displayDetails() {
        document.getElementById("displayFirstName").textContent = this.firstName;
        document.getElementById("displayLastName").textContent = this.lastName;
        document.getElementById("displayLanguage").textContent = this.language;
    }
};

const form = document.getElementById("personForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const language = document.getElementById("language").value;

    person.setDetails(firstName, lastName, language);
    person.displayDetails();

    // document.getElementById("firstName").value = "";
    // document.getElementById("lastName").value = "";
    // document.getElementById("language").value = "";
});
