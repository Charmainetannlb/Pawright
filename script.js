document.querySelectorAll('input[name="HDB-approved"]').forEach(function(radio) {
    //This grabs all the goddamn buttons called HDB-approved
    radio.addEventListener('click', function() {
        //The instruction for these radio buttons is to add a listener event
      document.getElementById("HDBphoto").classList.add('hidden')
      document.getElementById("Age1").classList.remove('hidden');
    });
  });
  document.querySelectorAll('input[name="ageDog"]').forEach(function(radio) {
    //This grabs all the goddamn buttons called ageDog
    radio.addEventListener('click', function() {
        //The instruction for these radio buttons is to add a listener event
      document.getElementById("Age1").classList.add('hidden')
      document.getElementById("xxxxxx").classList.remove('hidden');
    });
  });