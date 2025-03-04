document.addEventListener("DOMContentLoaded", function () {
    function calculateAge() {
        const dateOfBirthInput = document.getElementById("dob").value;
        const todaysDateInput = document.getElementById("today").value;
        const result = document.getElementById("result");

        if (!dateOfBirthInput || !todaysDateInput) {
            result.textContent = "Please enter both dates.";
            return;
        }

        const dob = new Date(dateOfBirthInput);
        const today = new Date(todaysDateInput);

        if (dob > today) {
            result.textContent = "Date of birth cannot be in the future.";
            return;
        }

        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        let dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        result.textContent = `Your age is ${age} years.`;
    }

    window.calculateAge = calculateAge;
});
