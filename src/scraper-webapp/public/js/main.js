function AutoScrap() {
    var checkBox = document.getElementById("autoScrap");
    var text = document.getElementsByClassName("inputfields");
    var select = document.getElementsByClassName("select") ;
    var daily = text[0]
    var weekly = text[1]
    if (checkBox.checked) {
        daily.disabled = false;
        weekly.disabled = false;

    }
    else {
        daily.disabled = true;
        weekly.disabled = true;
        select[0].disabled = true;
        select[1].disabled= true;
    }
}


function dayPick() {
    var checkBox = document.getElementsByClassName("inputfields")[0];
    console.log(checkBox)
    var text = document.getElementsByClassName("select")[0];
    console.log(text)

    if (checkBox.checked) {
        text.disabled = false;
        document.getElementsByClassName("select")[1].disabled = true;
    }
    else {
        text.disabled = true;
    }
}

function weekPick() {
    var checkBox = document.getElementsByClassName("inputfields")[1];
    console.log(checkBox)
    var text = document.getElementsByClassName("select")[1];
    console.log(text)

    if (checkBox.checked) {
        text.disabled = false;
        document.getElementsByClassName("select")[0].disabled = true;



    }
    else {
        text.disabled = true;
    }
}
