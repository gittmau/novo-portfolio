<?php

	$ corpo = "
         
         Nome: ". $ _POST [ 'nome' ]."
         E-mail: ". $ _POST [ 'mail' ]."
         
	";
	
	mail( 'preciosamenina2020@gmail.com' , $ corpo , 'De: contato@preciosamenina.com' );
	echo  ' <h1 style="color:#f4f4f4;text-align:center;font-family:Arial;background:SkyBlue;padding:15px"> Seus dados foram enviados com sucesso! </h1><br> <a href="preciosa.html" style="font-family:Arial;color:brown;display:block;text-align:center"> Clique aqui para voltar à página. ' ;


?>
