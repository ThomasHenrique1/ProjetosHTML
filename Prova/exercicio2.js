let vet = []
let multi=1;

$("#btn1").click(function(){
    for(let i=1; i<=35;i++){

        vet[i] = Math.round(Math.random()*300)
        if(vet[i]%2!=0){
            multi = multi*vet[i];
        }
    }
    for(let i =1;i<=35;i++){

         $("#resp1").append(vet[i]+ "-")
    }

    $("#resp2").html("Produto dos números ímpares: "+multi)

})