/**
 * @author Ivan Mauricio Parra
 */
valor1 = [1,2,3];
function num_pri(dato){
for(var a=3;a<=dato;a+=2){
	primo = true;
	for(var b=2;b<valor1.length;b++){
		if(a%valor1[b]==0){
			primo = false;
			break;
		}
	}
		if (primo == true){
			valor1.push(a);
		}
}
	return valor1.join();
}
function num_par(dato1){
for(var d=1;d<dato1.length;d++)
{
	if(dato1[d]%2==1)
	{
		dato1.push(d);
	}
}
		return dato1.join();
}
alert("Los numeros originales son: "+num_par([1,2,3,4,5,6,7,8,9]));
alert("Los numeros primos son: "+num_pri(100));