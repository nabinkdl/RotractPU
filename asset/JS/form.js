
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwKQf3S0V5DkcH_5vVlDNEFhS0KbxPSCi6wnKBbjFe52V6DiyfGa5STk1hPrVWQl09dBg/exec'
  const form = document.forms['submit-to-google-sheet']


  const emailInput = document.getElementById('cta-email');
  const validateButton = document.getElementById('memberSubscribe');
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const testy = emailInput.value;
  const check = emailRegex.test(emailInput.value);

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        waling();
        
    })
  

    function rest(){ 
                    member_submit.innerHTML = "Notify me",msg.innerHTML = "By subscribing, you will receive the Zoom/Google meet link.";
                    }
  

    function waling(){
                        if(emailRegex.test(emailInput.value) ){member_submit.innerHTML = "Subscribed",msg.innerHTML = "<span style='color: green; margin-inline: 20px auto;' >Thank you for Subscribing!</span>";}
                        else {msg.innerHTML = "<span style='color: red; margin-inline: 20px auto;' >Enter a valid Email !!"}


                        setTimeout(rest, 3000);
                        }
    

