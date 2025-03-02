function previewApplication() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let position = document.getElementById("position").value;
    let resume = document.getElementById("resume").files[0];

    if (!name || !email || !phone || !position || !resume) {
        alert("Please fill out all fields and upload a resume.");
        return;
    }

    // Save application in localStorage
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push({ name, email, phone, position });
    localStorage.setItem("applications", JSON.stringify(applications));

    // Populate review section
    document.getElementById("reviewName").innerText = name;
    document.getElementById("reviewEmail").innerText = email;
    document.getElementById("reviewPhone").innerText = phone;
    document.getElementById("reviewPosition").innerText = position;
    document.getElementById("reviewResume").innerText = resume.name;

    document.getElementById("review").style.display = "block";
}

