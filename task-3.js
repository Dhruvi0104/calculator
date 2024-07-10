let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = " ";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = " ";
            input.value = string;
        }

        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

function darkness() {
    let x = document.getElementById('main');
    x.style.background = "rgb(249, 215, 239)";

    let y = document.getElementById('dark');
    y.style.background = "black";

    let a = document.getElementById('1');
    let b = document.getElementById('2');
    let c = document.getElementById('3');
    let d = document.getElementById('4');
    let e = document.getElementById('5');
    let f = document.getElementById('6');
    let g = document.getElementById('7');
    let h = document.getElementById('8');
    let i = document.getElementById('9');
    let j = document.getElementById('00');
    let k = document.getElementById('0');
    let l = document.getElementById('point');
    let m = document.getElementById('plus');
    let n = document.getElementById('div');
    let o = document.getElementById('min');
    let p = document.getElementById('per');
    let q = document.getElementById('ac');
    let r = document.getElementById('del');
    let s = document.getElementById('mul');
    let t = document.getElementById('eql');

    m.style.color = "black";
    a.style.color = "black";
    b.style.color = "black";
    c.style.color = "black";
    d.style.color = "black";
    e.style.color = "black";
    f.style.color = "black";
    g.style.color = "black";
    h.style.color = "black";
    i.style.color = "black";
    j.style.color = "black";
    k.style.color = "black";
    l.style.color = "black";
    m.style.color = "black";
    n.style.color = "black";
    o.style.color = "black";
    p.style.color = "black";
    q.style.color = "black";
    r.style.color = "black";
    s.style.color = "black";
    t.style.color = "rgb(235, 168, 204)";
    m.style.backgroundColor = "rgb(235, 168, 204)";
    n.style.backgroundColor = "rgb(235, 168, 204)";
    o.style.backgroundColor = "rgb(235, 168, 204)";
    p.style.backgroundColor = "rgb(235, 168, 204)";
    q.style.backgroundColor = "rgb(235, 168, 204)";
    r.style.backgroundColor = "rgb(235, 168, 204)";
    s.style.backgroundColor = "rgb(235, 168, 204)";
    t.style.backgroundColor = "black";

    let z = document.getElementById('inputbox');
    z.style.color = "black";
}