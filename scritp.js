function val(result) {
    form.disp.value = form.disp.value + result;
}
function calculate() {
    if (form.disp.value == "") {
        alert("Please inter the Numbers")
    }else{
        form.disp.value = eval(form.disp.value);
    }
}
let btn = form.veql;
btn.addEventListener('dblclick', function () {
    form.disp.value = "";
})