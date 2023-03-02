## asic RPN Calculator, as a preparation for the real project.
## See HP15C Manual (especialy section 3) for indications as it's the main inspiration.
import math

#creating the stack containing four registers.
stack = [0, 0, 0, 0]

#lists of valid operators and functions
valid_op = ['+', '-', '*', '/', '^', 'v']
valid_fn = ['clr', 'del', 'chs', 'quit', 'xy']


# Display current stack
def show_stack():
    print("__________________")
    print("T:" + str(stack[3]))
    print("Z:" + str(stack[2]))
    print("Y:" + str(stack[1]))
    print("X:" + str(stack[0]))
    print("------------------")

# Handle calulator's operations
def op(usr_in):
    res = 0
    
    if usr_in == 'v':
        stack[0] = math.sqrt(stack[0])
        return 0
    elif usr_in == '+':
        res = stack[1] + stack[0]
    elif usr_in == '-':
        res = stack[1] - stack[0]
    elif usr_in == '*':
        res = stack[1] * stack[0]
    elif usr_in == '/':
        res = stack[1] / stack[0]
    elif usr_in == '^':
        res = stack[1] ** stack[0]

    stack[0] = res
    for i in range(1, len(stack) - 1):
        stack[i] = stack[i + 1]
    return 0

# Handle calulator's functions
def fn(usr_in):
    if usr_in == 'quit':
        return 1
    elif usr_in == 'clr':
        for i, v in enumerate(stack): stack[i] = 0
    elif usr_in == 'del':
        for i in range(len(stack) - 1):
            stack[i] = stack[i + 1]
    elif usr_in =='chs':
        stack[0] = stack[0] * -1
    elif usr_in == 'xy':
        tmp = stack[0]
        stack[0] = stack[1]
        stack[1] = tmp
    return 0

#Handle's number inputs
def nb(usr_in):
    for i in range(len(stack) - 1, 0, -1):
        stack[i] = stack[i - 1]
    stack[0] = usr_in
    return 0

# Main function
def rpn():
    show_stack()

    usr_in = input("> ").strip()

    if usr_in in valid_op: return op(usr_in)
    if usr_in in valid_fn: return fn(usr_in)
    try: 
        nb(float(usr_in))
    except:
        return 2

#Core Loop
while True:
    ret = rpn()
    if ret == 1:
        break
    if ret == 2:
        print("error")
