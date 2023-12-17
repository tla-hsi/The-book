let mti=[
    {
    "titl":"New book",
    "date":"15/12/2023",
    "bol":false,
},
{
    "titl":"Book",
    "date":"15/12/2023",
    "bol":true,
},

{
    "titl":"Secnd book",
    "date":"15/12/2023",
    "bol":false,
},
{
    "titl":"Book",
    "date":"15/12/2023",
    "bol":false,
},
{
    "titl":"Book",
    "date":"15/12/2023",
    "bol":true,
},
]
function gelocst(){
   let imti=JSON.parse(localStorage.getItem("mti"))
   mti=imti ?? []

}
gelocst()

//document.getElementById("tasks").innerHTML="<h2>Holle</h2>"
function myfunction(){
    document.getElementById("tasks").innerHTML="";
    let i=0;
    for(tas of mti){
        let con=` <div class="mt ${tas.bol ? 'done' : ''}">
        <div id="id"><h2>${tas.titl}</h2>
        <p><i  class="fa">&#xf274;</i>${tas.date}</p>
        </div>
        <div id="bu">


        <button id="pre" onclick="mybuRES(${i})" type="reset"><i class="fa fa-trash-o"></i></button>
        
        ${tas.bol ? `<button id="sec" style="background-color: rgb(146, 15, 15)"  onclick="myresol(${i})"><i class="fa fa-times-circle-o" style="font-size:12px"></i></button>` :
        `  <button id="sec"  onclick="myresol(${i})"><i class="fa fa-check"></i></button>`}


        <button id="tir" onclick="buttmy(${i})"><i class="fa fa-pencil"></i></button>
        </div>
        </div>`
        document.getElementById("tasks").innerHTML+=con;
        i++;
        }
}
myfunction()

document.getElementById("bi").addEventListener("click",function(){
    let da=new Date();
    let alee=da.getDate() + "/" + (da.getMonth()+1) + "/"+da.getFullYear()+"-"+ da.getHours() + ":"+da.getMinutes()
    let ale=prompt("entree le titre :")
    //let alee=prompt("entree la date :")
    let mtre={
        "titl":ale,
        "date":alee,
        "bol":true,
    }
    mti.push(mtre);
    
    locstor()

    myfunction()
})


function mybuRES(i){
    let mt=mti[i]
    let mycon= confirm(`Hello ${mt.titl}`)
    if(mycon){
        mti.splice(i,1);
        locstor()
        myfunction()
    }
}
//let name=localStorage.getItem("nme")
function buttmy(i){
    let se=mti[i];
        let ale=prompt("entree le titre :", se.titl)
        let sa=mti[i];
        let alee=prompt("entree la date :", sa.date)

        se.titl=ale;
        sa.date=alee;

        locstor()

        myfunction();
}

function myresol(i){
    let taas=mti[i];

    taas.bol= !taas.bol;

    locstor()

    myfunction();
}


function locstor(){
    let tmstri=JSON.stringify(mti)
    localStorage.setItem("mti",tmstri)
}




// document.getElementById("tir").addEventListener("click",function(){
//     let tel=document.getElementById("id").value;
//     document.getElementById("id").innerHTML=tel
// })















