var scriptURL = "https://script.google.com/macros/s/AKfycbwWI4LPsj0ml71thIdf56xbtX-OHSR4wzS_4lgECVJheJz61hgNPysBZFaqGWxHowwR/exec"
document.getElementById("contactForm").addEventListener("submit", function(e)
{
    e.preventDefault()
    console.log("Form Submitted")

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    console.log("Data", data);
    
    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(error => {
      console.error("Error!", error);
      alert("Something went wrong!");
    });
})