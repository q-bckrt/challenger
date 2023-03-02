// Creating the stack containing four registers.
window.stack = [0, 0, 0, 0];

// Lists of valid operators and functions.
window.valid_op = ['+', '-', '*', '/', '^', 'v']
window.valid_fn = ['clr', 'del', 'chs', 'xy']


function showStack() {
    console.log("--------------");
    console.log("T: " + stack[3]);
    console.log("Z: " + stack[2]);
    console.log("Y: " + stack[1]);
    console.log("X: " + stack[0]);
    console.log("--------------");
}

function op(usr_in) {
    let res = 0
    
    if (usr_in == 'v') {
        stack[0] = Math.sqrt(stack[0])
        console.log("ROOT");
        return;
    } else if (usr_in == '+') {
        res = stack[1] + stack[0];
    } else if (usr_in == '-') {
        res = stack[1] - stack[0];
    } else if (usr_in == '*') {
        res = stack[1] * stack[0];
    } else if (usr_in == '/') {
        res = stack[1] / stack[0];
    } else if (usr_in == '^') {
        res = stack[1] ** stack[0];
    }
    stack[0] = res
    for (let i  = 1; i < stack.length - 1; i++) {
        stack[i] = stack[i + 1];
    }
}

function fn(usr_in) {
    if (usr_in == 'clr') {
        for (let i = 0; i < stack.length; i++) {
            stack[i] = 0;
        }
    } else if (usr_in == 'del') {
        for (let i = 0; i < stack.length - 1; i++) {
            stack[i] = stack[i + 1];
        }
    } else if (usr_in =='chs') {
        stack[0] = stack[0] * -1;
    } else if (usr_in == 'xy') {
        tmp = stack[0];
        stack[0] = stack[1];
        stack[1] = tmp;
    }
}

function nb(usr_in) {
    console.log(typeof(usr_in))
    for (let i = stack.length - 1; i > 0; i--) {
        stack[i] = stack[i - 1];
    }
    stack[0] = usr_in;
}

function updateDisplay () {
    document.getElementById("reg_x_l").innerText = stack[0];
}

// Parse input and dispatch to processing functions
function rpn(usr_input) {

    if (valid_op.includes(usr_input)) {
        console.log("OP > " + usr_input);
        op(usr_input);
    } else if (valid_fn.includes(usr_input)) {
        console.log("FN > " + usr_input);
        fn(usr_input);
    } else if (parseFloat(usr_input)) {
        console.log("NM > " + usr_input);
        nb(parseFloat(usr_input));
    } else {
        console.log("Invalid > " + usr_input);
    }
 
    showStack();
    updateDisplay(); 
}