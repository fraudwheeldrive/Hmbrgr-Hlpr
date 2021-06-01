function signupFormHandler(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#inputEmail4').value.trim();
    const address = document.querySelector('#inputAddressl').value.trim();
    const address2 = document.querySelector('#inputAddressl2').value.trim();
    const city = document.querySelector('#inputCity').value.trim();
    const state = document.querySelector('#inputState').value.trim();
    const zip = document.querySelector('#inputZip').value.trim();
    const gridCheck = document.querySelector('#gridCheck').value.trim();
   
    
      fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          address,
          address2,
          city,
          state,
          zip,
          gridCheck          
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    
}
  
document.querySelector('.contactForm').addEventListener('submit', signupFormHandler);

