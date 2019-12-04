const formSubmitButton = document.getElementById('formSubmitButton')
let nvalid, avalid, evalid, pvalid;
let c3 = document.getElementById('c3')
var table = document.getElementById("table");

let getForm = document.forms['userForm']
// let showForm = function(){

function home() {

    document.getElementById("img2").src = "./Digha-West-Bengal.jpg";
}

function createaccountclicked() {
    table.className = "table"
    //   table.style.visibility="invisible"
    getForm.className = "form1"
    c3.innerHTML = ""


    formSubmitButton.addEventListener('click', function () {
        // get values from form 

        const gotName = getForm.name
        let n = gotName.value
        const gotAge = getForm.age
        let a = gotAge.value
        const gotEmail = getForm.email
        let e = gotEmail.value
        const gotPassword = getForm.password
        let gp = gotPassword.value
        const gotPhone = getForm.phone
        let p = gotPhone.value

        //validations
        if (n.length > 3 || n.length <= 0 || n == "") {
            const p1 = document.getElementById('p1')
            p1.className = "p1"



        }
        else {

            nvalid = "true"
            // console.log(nvalid)
        }
        if (isNaN(a) || a < 1 || a > 120 || a.length < 1 || a == "") {
            const p2 = document.getElementById('p2')
            p2.className = "p2"
        } else {
            avalid = "true"
        }

        // email validation

        let atposition = e.indexOf("@");
        let dotposition = e.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= e.length || e == "") {
            const p3 = document.getElementById('p3')
            p3.className = "p3"
        }
        else {

            // console.log('valid')
            evalid = "true"
        }
        if (p.length !== 10 && isNaN(p) || p == "") {
            const p4 = document.getElementById('p4')
            p4.className = "p4"
            //console.log('not valid')
        } else {
            pvalid = "true"


        }
        if(gp.length!==8){
            const p5 = document.getElementById('p4')
            p5.className = "p5"
        }
        else{
            gpvalid="true"
        }
        if (nvalid == "true" && avalid == "true" && evalid == "true" && pvalid == "true"&&gpvalid=="true") {
            console.log("all valid");
            var validFields = {

                name: n,
                age: a,
                email: e,
                phone: p,
                password: gp
            }

            localStorage.setItem('validFields', JSON.stringify(validFields));


            var user = JSON.parse(localStorage.getItem('validFields'));
            var result = []
            for (var k in user) {
                result.push(user[k])
            }


            var count = 0
            var row = table.insertRow(count);
            for (var i = 0; i < result.length; i++) {
                var cell = row.insertCell(i)
                cell.innerHTML = result[i];
            }
            count++

            table.appendChild(row)
        }
        else {

            document.getElementById("myForm").reset();

        }

    })

}
let formClearButton = document.getElementById('formClearButton')
formClearButton.addEventListener('click', function () {
    const getFormToClear = document.forms['userForm']
    getFormToClear.reset();
    localStorage.clear()
    table.remove()
})
function showAccountClicked() {
    const getFormToClear = document.forms['userForm']
    getFormToClear.innerHTML = ""

}
function login(){
    
}