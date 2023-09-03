
function formtwo(){

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwqn3SkWWKYY4qvySdynsyfCxK-3nDyWzMmxIOSeMphITMFSuP7VkB491zv54yOEFjU/exec'
  const form = document.forms['submit-to-google-sheet-two']




  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      rest();
  })


  function rest(){ 
    join.innerHTML = "submited",msg2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Thank you for your feedback";
    }


}