$("#frmAcceso").on('submit', function(e)
{
	e.preventDefault();
	logina=$("#logina").val();
	clavea=$("#clavea").val();

	$.post("../ajax/config_user.php?op=verificar",
        {"logina":logina, "clavea":clavea},
        function(data)
        {
           if (data!="null")
            {
            	$(location).attr("href","config_user.php");//<---direccion de enlace ruta
            }else{
            	bootbox.alert("Usuario y/o Password incorrectos");
            }
        });
})