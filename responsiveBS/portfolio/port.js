document.addEventListener('DOMContentLoaded', function() {
    const contentForm = document.getElementById('creation');
    const contentContainer = document.getElementById('namesz');
    const contentContainers = document.getElementById('siiy');
    const contentContainers0 = document.getElementById('meow');
    const contentContainers1 = document.getElementById('devop');
    const contentContainers2 = document.getElementById('mail');
    const contentContainers3 = document.getElementById('add');
    const contentContainers4 = document.getElementById('num');
   

    contentForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const namesz= document.getElementById('newname').value;
        const siiy= document.getElementById('newname').value;
        const meow= document.getElementById('newname').value;
        const devop = document.getElementById('newcourse').value;
        const mail = document.getElementById('newmail').value;
        const add = document.getElementById('newadd').value;
        const num = document.getElementById('newnum').value;

        contentContainer.innerHTML = namesz
        contentContainers.innerHTML = siiy
        contentContainers0.innerHTML = meow
        contentContainers1.innerHTML = devop
        contentContainers2.innerHTML = mail
        contentContainers3.innerHTML = add
        contentContainers4.innerHTML = num



        document.getElementById('newname').value = '';
        document.getElementById('newcourse').value = '';
        document.getElementById('newmail').value = '';
        document.getElementById('newadd').value = '';
        document.getElementById('newnum').value = '';
    });
  });


