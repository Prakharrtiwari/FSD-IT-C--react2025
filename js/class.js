document.addEventListener('DOMContentLoaded', function() 
{
    const form = document.getElementById('myForm');
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', function(event)

    {
        event.preventDefault();
        resultDiv.textContent = '';
        errorDiv.textContent = '';
        loadingDiv.style.display = 'block';
        const formData = new FormData(form);

        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        const container = document.getElementsByClassName('container')[0];
        container.style.display = 'none';   
        .then(response => response.json())
        .then(data => 
        {
            loadingDiv.style.display = 'none';
            if (data.error)
            {
                errorDiv.textContent = data.error;
            }
            else
            {
                resultDiv.textContent = 'Success: ' + data.message;
            }
            container.style.display = 'block';
        })
        .catch(error => 
        {
            loadingDiv.style.display = 'none';
            errorDiv.textContent = 'An error occurred: ' + error.message;
            container.style.display = 'block';
        }); 
        alert("Form submitted! Please wait for the result.");
    });
})
Button.addEventListener('click', msg);

function showWelcome() {
    document.getElementById('disp').innerHTML = <h2 style="color:yellow; background-color:blue; padding:10px;">
            Welcome to ABES Engineering College
        </h2>;
}
