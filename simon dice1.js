var c=0
var color=new Array()
var simosec=new Array()
var humsec=new Array()
var a=0
var simon
function boton (){
simon=Math.random()*4
if (simon<1){
    color.push("rojo")
    alert(color)
}else if (simon<2){
    color.push("verde")
    alert (color)
}else if (simon<3){
    color.push("amarillo")
    alert (color)
}else{
    color.push("azul")
    alert(color)
}

}
function rojo (){
if (color[c]="rojo"){
    a=a+1
    humsec.push("rojo")
    if (humsec=color){
        boton()
    }
}
} 
function verde (){
if (color[c]="verde"){
    a=a+1
    humsec.push("verde")
    if (humsec=color){
        boton()
    }
}
}   
function amarillo (){
if (color[c]="amarillo"){
    a=a+1
    humsec.push("amarillo")
    if (humsec=color){
        boton()
    }
}
}   
function azul (){
if (color[c]="azul"){
    a=a+1
    humsec.push("azul")
    if (humsec=color){
        boton()
    }
}
}       
