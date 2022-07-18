(function(){

  var form = document.getElementsByName('script_from')[0],elementos = script_from.elements, boton = document.getElementById('submit');
    var validarNombre = function(e){
      if (script_from.username.value == 0){ 
        alert('Complete el campo Nombre...!!'); 
        e.preventDefault();
      }
    };
    var validarEmail = function(e){
      if (script_from.email.value == 0){
        alert('Complete el su Correo electronico...!!');
        e.preventDefault();
      }
    };
    var validarPassword = function(e){
      if (script_from.password.value == 0){
        alert('Complete el campo Contraseña...!!');
        e.preventDefault();
      }
    };
    var validarPassword_Comfirm = function(e){
      if (script_from.passwordConfirm.value == 0){
        alert('Complete el campo de confirmacion de cotraseña...!!');
        e.preventDefault();
      }
    };
    var validar = function(e){
      validarNombre(e);
      validarEmail(e);
      validarPassword(e);
      validarPassword_Comfirm(e);        
      };       
    script_from.addEventListener("submit",validar);       
}())