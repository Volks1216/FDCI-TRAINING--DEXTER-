$(document).ready(function(){
    const API_TOKEN = "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";
    $.ajax({
        "url": "https://api.github.com/users/Volks1216/repos",
        "method": "GET",
        "headers": {
            "Authorization": `token`+ API_TOKEN
        },
        "dataType": "json",
        "success": function(results){

            $("#click").on("click", function(){
                $("#aResult").empty();
                $("#aResult").toggle();
                console.log(results);
            for(let i=0; i<results.length; i++){
                console.log(results);
                //$("#aResult").empty();
                $("#aResult").append(`
                        <tr>
                            <td>${results[i].name}</td>
                            <td>${results[i].full_name}</td>
                            <td>${results[i].node_id}</td>
                            <td>${results[i].private}</td>
                            <td>${results[i].id}</td>
                        </tr>
                    `);
            }
            })

            $("#click1").on("click", function(){
                $("#aResult1").empty();
                $("#aResult1").toggle();
                //console.log(results);
            for(let i=0; i<results.length; i++){
                //console.log(results);
                //$("#aResult").empty();
                $("#aResult1").append(`Name: ${results[i].name}<br>`);
            }
            })

            $("#click2").on("click", function(){
                $("#aResult2").empty();
                $("#aResult2").toggle();
                //console.log(results);
            for(let i=0; i<results.length; i++){
                //console.log(results);
                //$("#aResult").empty();
                $("#aResult2").append(`Full Name: ${results[i].full_name}<br>`);
            }
            })

            $("#click3").on("click", function(){
                $("#aResult3").empty();
                $("#aResult3").toggle();
                //console.log(results);
            for(let i=0; i<results.length; i++){
                //console.log(results);
                //$("#aResult").empty();
                $("#aResult3").append(`node ID: ${results[i].node_id}<br>`);
            }
            })

            $("#click4").on("click", function(){
                $("#aResult4").empty();
                $("#aResult4").toggle();
                //console.log(results);
            for(let i=0; i<results.length; i++){
                //console.log(results);
                //$("#aResult").empty();
                $("#aResult4").append(`isPrivate: ${results[i].private}<br>`);
            }
            })

            $("#click5").on("click", function(){
                $("#aResult5").empty();
                $("#aResult5").toggle();
                //console.log(results);
            for(let i=0; i<results.length; i++){
                //console.log(results);
                //$("#aResult").empty();
                $("#aResult5").append(`ID: ${results[i].id}<br><br>`);
            }
            })
        },
        "error": function(error){
            console.log(error);
        }
    })
})