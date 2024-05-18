document.querySelectorAll('input[name="HDB-approved"]').forEach(function(radio) {
    radio.addEventListener('click', function() {
      /*var targetId = this.id.replace('Radio', '');
      document.querySelectorAll('.interface').forEach(function(interface) {
        interface.classList.remove('active');
      });*/
      //alert(1);
      document.getElementById("HDBphoto").classList.add('hidden');
    });
  });
