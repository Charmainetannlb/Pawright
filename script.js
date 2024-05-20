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
      document.getElementById("character").classList.remove('hidden');
    });
  });
 
  document.querySelectorAll('input[class="personality"]').forEach(function(checkbox) {
    //This grabs all the goddamn buttons called personality
    checkbox.addEventListener('click', function() {
      var maxChecked = 2;
      var checkboxes = document.querySelectorAll('input[class="personality"]');
      
        var checkedCount = 0;
        // Count the number of checkboxes checked
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            checkedCount++;
          }
        });
        // If the number of checked checkboxes exceeds the limit, prevent further checks
        if (checkedCount > maxChecked) {
          this.checked = false; // Uncheck the checkbox that was just checked
          alert('You can only check up to ' + maxChecked + ' checkboxes.');
        }    
    });
  });



  // Get a reference to the button element
var button = document.getElementById("Next");

// Attach an event listener to the button
button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  document.getElementById("character").classList.add('hidden')
  document.getElementById("lifestyle").classList.remove('hidden');
});

var button = document.getElementById("Done");
document.querySelectorAll('input[name="others"]').forEach(function(checkbox) {
   // Attach an event listener to the button
button.addEventListener("click", function() {
        //The instruction for these checkboxes is to add a listener event
      document.getElementById("lifestyle").classList.add('hidden')
      document.getElementById("results").classList.remove('hidden');
    });
  });
