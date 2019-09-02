// JavaScript source code
var SergoBuyanov = 0;
var YgrekDemidov = 0;
var usedaction = 0;
function cat () {
    alert("Мяу");
}
function dog () {
    alert("Гав");
}
function number(x) {
    if (document.getElementById('answer').value =='0') {
        document.getElementById('answer').value = x;
    }
    else if (document.getElementById('answer').value.length==13) {
        alert("Всё, хорош");
    }
    else {
        document.getElementById('answer').value += x;
    }
}
function clearall() {
    a = 0;
    b = 0;
    document.getElementById('answer').value = 0;
    SergoBuyanov = 0;
}
function clearlast() {
    if (document.getElementById('answer').value.length == 1) {
        document.getElementById('answer').value = 0;
    }
    else {
        document.getElementById('answer').value = document.getElementById('answer').value.slice(0, document.getElementById('answer').value.length - 1);
    }
    
}
function dosomematematics(x) {
    if ((SergoBuyanov == 0) & (usedaction==0)) {
        SergoBuyanov = Number(document.getElementById('answer').value);
        usedaction = x;
        document.getElementById('answer').value = 0;
        //alert(SergoBuyanov);
        //alert(usedaction);
    }
    else {
        switch (usedaction) {
            case 1:
                SergoBuyanov = SergoBuyanov + Number(document.getElementById('answer').value);
                usedaction = x;
                document.getElementById('answer').value = 0;
                //alert(SergoBuyanov);
                break;
            case 2:
                SergoBuyanov = SergoBuyanov - Number(document.getElementById('answer').value);
                usedaction = x;
                document.getElementById('answer').value = 0;
                //alert(SergoBuyanov);
                break;
            case 3:
                SergoBuyanov = SergoBuyanov * Number(document.getElementById('answer').value);
                usedaction = x;
                document.getElementById('answer').value = 0;
                //alert(SergoBuyanov);
                break;
            case 4:
                if (document.getElementById('answer').value != 0) {
                    SergoBuyanov = SergoBuyanov / Number(document.getElementById('answer').value);
                    usedaction = x;
                    document.getElementById('answer').value = 0;
                   // alert(SergoBuyanov);
                }
                else {
                    alert("Многоуважаемый, а вы в курсе, что на ноль делить нельзя?");
                    SergoBuyanov = 0;
                    usedaction = 0;
                }
                break;
        }
    }
}
function giveanswer() {
    if (usedaction != 0) {
        switch (usedaction) {
            case 1:
                SergoBuyanov = SergoBuyanov + Number(document.getElementById('answer').value);
                usedaction = 0;
                document.getElementById('answer').value = SergoBuyanov;
                //alert(SergoBuyanov);
                break;
            case 2:
                SergoBuyanov = SergoBuyanov - Number(document.getElementById('answer').value);
                usedaction = 0;
                document.getElementById('answer').value = SergoBuyanov;
                //alert(SergoBuyanov);
                break;
            case 3:
                SergoBuyanov = SergoBuyanov * Number(document.getElementById('answer').value);
                usedaction = 0;
                document.getElementById('answer').value = SergoBuyanov;
                //alert(SergoBuyanov);
                break;
            case 4:
                if (document.getElementById('answer').value != 0) {
                    SergoBuyanov = SergoBuyanov / Number(document.getElementById('answer').value);
                    usedaction = 0;
                    document.getElementById('answer').value = SergoBuyanov;
                    // alert(SergoBuyanov);
                }
                else {
                    alert("Многоуважаемый, а вы в курсе, что на ноль делить нельзя?");
                    SergoBuyanov = 0;
                    usedaction = 0;
                }
                break;
        }
    }
}
function givepoint() {
    var ok = true;
    for (let char of document.getElementById('answer').value) {
        if (char == '.') {
            ok = false;
        }
    }
    if (ok == true) {
        document.getElementById('answer').value += ".";
    }
}