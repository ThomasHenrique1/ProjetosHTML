$("#btn1").click(function(){
    $("#box1").show();
    $("#box2").hide();
    $("#box3").hide();
});

$("#btn2").click(function(){
    $("#box1").hide();
    $("#box2").show();
    $("#box3").hide();
});

$("#btn3").click(function(){
    $("#box1").hide();
    $("#box2").hide();
    $("#box3").show();
});

let max = 5;
let cont = 1;
$("#ant").click(function(){
    if(cont == 1){
        cont = max;
    }else{
        cont--;
    }
    $("#imagem").attr("src","img"+cont+".jpg");
})

$("#prox").click(function(){
    if(cont == max){
        cont = 1;
    }else{
        cont++;
    }
    $("#imagem").attr("src","img"+cont+".jpg");
})

$("#btnTab").click(function(){
    let valor = Number($("#txttab").val());
    $("#tabuada").html("");
    for(let i = 0; i<=10;i++){ 
        $("#tabuada").append(`${valor} X ${i} =${valor*i}<br>`);
    }
})

let h = 0;
let m = 0;
let s = 0;
let mm = 0;

cronometo = setInterval(tempo,1000);

document.querySelector("#btn5").addEventListener("click", function(){
    cronometo = setInterval(function() {
        for(i=0; i<1;i++){
            mm+=1
            if(mm == 1000){s+=1; mm=0}
            if(s == 60){m+= 1;s=0;}
            if(m == 60){h+=1;}
            document.querySelector("#tempo").innerHTML=`<p>${h}h:${m}m:${s}s:${mm}mm</p>`
        }
    })

})