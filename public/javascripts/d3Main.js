var systems = [
    {name:"kale" ,size: 20,population:54,instagramFollowed:5,inviteFriends: 0},
    {name:"ramak",size:36,population: 131,instagramFollowed:5,inviteFriends: 0},
    {name:"pestaco",size: 7,population: 11,instagramFollowed:15,inviteFriends: 0},
    {name:"Esminar",size:34,population: 236,instagramFollowed:20,inviteFriends: 0},
    {name:"Domino",size:60,population: 233,instagramFollowed:4,inviteFriends:3077},
    {name:"MRbilit",size:26,population: 83,instagramFollowed:1,inviteFriends: 0},
    {name:"Pegah",size:36,population: 103,instagramFollowed:20,inviteFriends: 0},
    {name:"Bourse",size:8,population: 10,instagramFollowed:0,inviteFriends: 0}
];
    /*function findElementIndex(name) {
        var indexId = 0;
        systems.forEach(function (item,index){
            if(name === item.name){
                indexId = index;
            }
        });
        console.log(indexId);
        return indexId;
    }*/
//console.log(findElementIndex('kale'));
$(document).ready(function(){
    $( ".windows,.draggable" ).draggable();

    //make them to be checked by default
    $('#hideAll').prop("checked",true);
    $('#kaleId').prop("checked",true);
    $('#ramakId').prop("checked",true);
    $('#farkhondeId').prop("checked",true);
    $('#avangId').prop("checked",true);
    $('#dominoId').prop("checked",true);
    $('#tap30Id').prop("checked",true);
    $('#pegahId').prop("checked",true);
    $('#bimitoId').prop("checked",true);
    //check campaign users
    $('#kaleUserId').prop("checked",true);
    $('#ramakUserId').prop("checked",true);
    $('#farkhondeUserId').prop("checked",true);
    $('#avangUserId').prop("checked",true);
    $('#dominoUserId').prop("checked",true);
    $('#tap30UserId').prop("checked",true);
    $('#pegahUserId').prop("checked",true);
    $('#bimitoUserId').prop("checked",true);



    //***********show and hide windows and double click

    $("#windows1").hide();
    $("#windows1").click(function (){
        $("#windows1").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows1").mouseout(function (){
        $("#windows1").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster0").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows1").show();
    });
    $('#windowsBtn1').click(function (){
        $("#windows1").hide();
    });

    $("#windows2").hide();
    $("#windows2").click(function (){
        $("#windows2").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows2").mouseout(function (){
        $("#windows2").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster1").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows2").show();
    });
    $('#windowsBtn2').click(function (){
        $("#windows2").hide();
    })

    $("#windows3").hide();
    $("#windows3").click(function (){
        $("#windows3").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows3").mouseout(function (){
        $("#windows3").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster2").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows3").show();
    });
    $('#windowsBtn3').click(function (){
        $("#windows3").hide();
    })

    $("#windows4").hide();
    $("#windows4").click(function (){
        $("#windows4").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows4").mouseout(function (){
        $("#windows4").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster3").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows4").show();
    });
    $('#windowsBtn4').click(function (){
        $("#windows4").hide();
    })

    $("#windows5").hide();
    $("#windows5").click(function (){
        $("#windows5").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows5").mouseout(function (){
        $("#windows5").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster4").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows5").show();
    });
    $('#windowsBtn5').click(function (){
        $("#windows5").hide();
    })

    $("#windows6").hide();
    $("#windows6").click(function (){
        $("#windows6").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows6").mouseout(function (){
        $("#windows6").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster5").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows6").show();
    });
    $('#windowsBtn6').click(function (){
        $("#windows6").hide();
    })

    $("#windows7").hide();
    $("#windows7").click(function (){
        $("#windows7").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows7").mouseout(function (){
        $("#windows7").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster6").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows7").show();
    });
    $('#windowsBtn7').click(function (){
        $("#windows7").hide();
    })

    $("#windows8").hide();
    $("#windows8").click(function (){
        $("#windows8").css("z-index","100");
        //$("#windows1").hide();
    });
    $("#windows8").mouseout(function (){
        $("#windows8").css("z-index","98");
        //$("#windows1").hide();
    });
    $(".maincluster7").dblclick(function(){
        //alert("The paragraph was double-clicked.");
        $("#windows8").show();
    });
    $('#windowsBtn8').click(function (){
        $("#windows8").hide();
    })








    //defining click event
    $("#kaleId").click(function() {
        if (!this.checked) {
            //var node = d3.selectAll(".cluster0");
            //delete tick();
            //alert('is checked');

            /*d3.layout
                .force()
                //.on("tick", mainFunction().tick())
                .stop();*/


            //systems.splice(findElementIndex("kale"),1);
            //$(".cluster0").remove();
            //$("svg").remove();
            //mainFunction();
            //console.log(systems);
            //d3.layout.force().nodes(nodes).size([width-50, height-50]).charge(-10).on("tick", tick).start();
            //d3.node.selectAll(".cluster0").delete();
            $(".cluster0").hide();
            $(".maincluster0").hide();
        } else if (this.checked) {
            //alert('not checked');
            //systems.splice(0,);
            //systems.push({name: "kale", size: 20, population: 10})
            //$("svg").remove();
            //mainFunction.restart();
            //mainFunction();
            //console.log(systems);
            //d3.layout.force().nodes(nodes).size([width, height]).charge(-12).on("tick", tick).start();
            $(".cluster0").show();
            $(".maincluster0").show();

        }
    });
    $("#ramakId").click(function(){
            if(!this.checked) {
                $(".cluster1").hide();
                $(".maincluster1").hide();
            }else if(this.checked){
                $(".cluster1").show();
                $(".maincluster1").show();
            }
    });
    $("#farkhondeId").click(function(){
        if(!this.checked) {
            $(".cluster2").hide();
            $(".maincluster2").hide();
        }else if(this.checked){
            $(".cluster2").show();
            $(".maincluster2").show();
        }
    });
    $("#avangId").click(function(){
        if(!this.checked) {
            $(".cluster3").hide();
            $(".maincluster3").hide();
        }else if(this.checked){
            $(".cluster3").show();
            $(".maincluster3").show();
        }
    });
    $("#dominoId").click(function(){
        if(!this.checked) {
            $(".cluster4").hide();
            $(".maincluster4").hide();
        }else if(this.checked){
            $(".cluster4").show();
            $(".maincluster4").show();
        }
    });
    $("#tap30Id").click(function(){
        if(!this.checked) {
            $(".cluster5").hide();
            $(".maincluster5").hide();
        }else if(this.checked){
            $(".cluster5").show();
            $(".maincluster5").show();
        }
    });
    $("#pegahId").click(function(){
        if(!this.checked) {
            $(".cluster6").hide();
            $(".maincluster6").hide();
        }else if(this.checked){
            $(".cluster6").show();
            $(".maincluster6").show();
        }
    });
    $("#bimitoId").click(function(){
        if(!this.checked) {
            $(".cluster7").hide();
            $(".maincluster7").hide();
        }else if(this.checked){
            $(".cluster7").show();
            $(".maincluster7").show();
        }
    });

    $("#hideAll").click(function(){
        if(!this.checked) {
            $(".cluster0").hide();
            $(".maincluster0").hide();
            $(".cluster1").hide();
            $(".maincluster1").hide();
            $(".cluster2").hide();
            $(".maincluster2").hide();
            $(".cluster3").hide();
            $(".maincluster3").hide();
            $(".cluster4").hide();
            $(".maincluster4").hide();
            $(".cluster5").hide();
            $(".maincluster5").hide();
            $(".cluster6").hide();
            $(".maincluster6").hide();
            $(".cluster7").hide();
            $(".maincluster7").hide();
        }else if(this.checked){
            $(".cluster0").show();
            $(".maincluster0").show();
            $(".cluster1").show();
            $(".maincluster1").show();
            $(".cluster2").show();
            $(".maincluster2").show();
            $(".cluster3").show();
            $(".maincluster3").show();
            $(".cluster4").show();
            $(".maincluster4").show();
            $(".cluster5").show();
            $(".maincluster5").show();
            $(".cluster6").show();
            $(".maincluster6").show();
            $(".cluster7").show();
            $(".maincluster7").show();
        }
    });

    //**filtering campaign users
    $("#AllUserId").click(function(){
        if(!this.checked) {
            $(".cluster0").hide();
              $(".cluster1").hide();
                $(".cluster2").hide();
                  $(".cluster3").hide();
                    $(".cluster4").hide();
                      $(".cluster5").hide();
                        $(".cluster6").hide();
                          $(".cluster7").hide();
                            $(".cluster8").hide();
        }else if(this.checked){
            $(".cluster0").show();
              $(".cluster1").show();
                $(".cluster2").show();
                  $(".cluster3").show();
                    $(".cluster4").show();
                      $(".cluster5").show();
                        $(".cluster6").show();
                          $(".cluster7").show();
                            $(".cluster8").show();
        }
    });
    $("#kaleUserId").click(function(){
        if(!this.checked) {
            $(".cluster0").hide();
        }else if(this.checked){
            $(".cluster0").show();
        }
    });
    $("#ramakUserId").click(function(){
        if(!this.checked) {
            $(".cluster1").hide();
        }else if(this.checked){
            $(".cluster1").show();
        }
    });
    $("#farkhondeUserId").click(function(){
        if(!this.checked) {
            $(".cluster2").hide();
        }else if(this.checked){
            $(".cluster2").show();
        }
    });
    $("#avangUserId").click(function(){
        if(!this.checked) {
            $(".cluster3").hide();
        }else if(this.checked){
            $(".cluster3").show();
        }
    });
    $("#dominoUserId").click(function(){
        if(!this.checked) {
            $(".cluster4").hide();
        }else if(this.checked){
            $(".cluster4").show();
        }
    });
    $("#tap30UserId").click(function(){
        if(!this.checked) {
            $(".cluster5").hide();
        }else if(this.checked){
            $(".cluster5").show();
        }
    });
    $("#pegahUserId").click(function(){
        if(!this.checked) {
            $(".cluster6").hide();
        }else if(this.checked){
            $(".cluster6").show();
        }
    });
    $("#bimitoUserId").click(function(){
        if(!this.checked) {
            $(".cluster7").hide();
        }else if(this.checked){
            $(".cluster7").show();
        }
    });
});
