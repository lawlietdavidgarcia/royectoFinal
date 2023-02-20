Programa 

Tenemos que considerar dado a la naturaleza del problema, tendremos que preguntar al usuario 
ciertas preguntas, dependiendo de la respuesta se realizara un proceso u otro, o no se realizara ningun proceso.
Al principio tendriamos que preguntar el nombre, esto es algo constante y que no cambiaria. 
luego se le preguntaria la edad, dependiedo de la edad que tenga el proceso podra concluir o seguira ejecutandose, si es menor de 18, la empresa no podria procesarlo, asi que se termina el proceso pero si es
mayor de edad osea mayor de 18 a;os se le hara un recargo el cual va a variar (18 a 24, 25 a 49, mayor de 50 a;os) el porcentaje. 

tambine tendremos que preguntar si esta casado ya que de la pareja se le generara otro recargo, y tambien dependiedo del margen de edad el porcentaje variara. Si la respuesta es no, no se le generara nada y continuarioamos con el proceso. 

Otra de las preguntas seria si tiene hijos, si la respuesta es positiva se le hara otro recargo dependiendo de cuantos hijos tenga, sino el proceso seguiria adelante sin recargo.

ya al final tendriamos que calcular la suma de todos los recargos, esto lo realizariamos sumando el porcentaje obtenido de cada recargo, el porcentaje de los recargos se calcularioa multiplicando el salario base por el porcentaje del recargo y de ahi solo se le sumaria a la base, dandonos como resultado el total

para el loop lo que tendriamos que hacer es crear una variable que contenga el valor de true, tendriamos que hacer un while y dentro de ese while despues de preguntar nombre tendriamos que definir una condicion que si el usuario coloque RESET, el valor de la variable pasaria a ser false. esto dentendria el while. 
