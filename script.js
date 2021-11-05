function Num(val) {
    document.getElementById('result').value += val
}
function equal() {
    let Input = document.getElementById('result').value;
    let Output = eval(Input);
    document.getElementById('result').value = Output;
}
function clear() {
    document.getElementById('result').value = '';
}