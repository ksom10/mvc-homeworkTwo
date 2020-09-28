//This is my controller for my app

function showText(data){
    $(".content").html(data);
    $(".loader").css("display", "none");
}


function initListener(){

    $("#home").click(function (event){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getHome(showText);
    });
    $("#about").click(function (event){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getAbout(showText);
    });
    $("#products").click(function (event){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getProducts(showText);
    });
    $("#contact").click(function (event){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getContact(showText);
    });
    //$("nav a").click(function(e){
        //this is using e to find id
        //console.log("click", e.currentTarget.id);
        //this is using Jquery's way to do it
        //console.log("jquery", this.id);
        //let btnId = this.id;
        //$(".loader").css("display", "block");
        //MODEL.getHome(showText);
        //MODEL.getAbout(showText);
        //MODEL.getProducts(showText);
        //MODEL.getContact(showText);
        //MODEL.showAlert(btnId);
        //console.log("btnId ", btnId);
        //$(".content").html(`<h1>This is a variable name ${btnId}</h1>`);


    //});
}

$(document).ready(function () {
    initListener();
});