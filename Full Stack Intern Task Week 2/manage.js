document.addEventListener("DOMContentLoaded", function () {
    const applicationList = document.getElementById("applicationList");

    // Retrieve stored applications from localStorage
    let applications = JSON.parse(localStorage.getItem("applications")) || [];

    // Function to display applications
    function displayApplications() {
        applicationList.innerHTML = ""; // Clear the list
        applications.forEach((app, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${app.name}</strong> - ${app.position}
                <button onclick="removeApplication(${index})">Remove</button>
            `;
            applicationList.appendChild(li);
        });
    }

    // Remove application function
    window.removeApplication = function (index) {
        applications.splice(index, 1);
        localStorage.setItem("applications", JSON.stringify(applications));
        displayApplications();
    };

    displayApplications(); // Load applications on page load
});
