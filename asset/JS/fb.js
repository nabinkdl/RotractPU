
function formtwo(){

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwqn3SkWWKYY4qvySdynsyfCxK-3nDyWzMmxIOSeMphITMFSuP7VkB491zv54yOEFjU/exec'
  const form = document.forms['submit-to-google-sheet-two']



  const emailInput = document.getElementById('email');
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const testy2 = emailInput.value;
  const check = emailRegex.test(emailInput.value);


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      waling();
  })


  function rest(){ 
    join.innerHTML = "Join Us",msg2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Being a Rotract means making an impact.";
    }




    function waling(){
      if(emailRegex.test(emailInput.value) ){join.innerHTML = "Submited",msg2.innerHTML = "<span style='color: green; margin-inline: 16px auto;' >Thank you for your feedback";}

      else {msg2.innerHTML = "<span style='color: red; margin-inline: 20px auto;' >Enter a valid Email !!"}
      
      setTimeout(rest, 3000);
      }




}