def celsiustofahrenheit(c):
    return((9/5)*c + 32)

def fahrenheittocelsius(p):
    return((5/9)*(p-32))

def celsiustokelvin(x):
    return(x+273)

def kelvintocelsius(y):
    return(y-273)

def fahrenheittokelvin(a):
    return celsiustokelvin(fahrenheittocelsius(a))

def kelvintofahrenheit(b):
    return celsiustofahrenheit(kelvintocelsius(b))

select="y"

op1=[]
op2=[]
op3=[]
op4=[]
op5=[]
op6=[]

while(select=="y" or select=="Y"):
    op=input("enter selection:1.C->F 2.F->C 3.C->K 4.K->C 5.F->K 6.K->F\n")
    if(op=="1"):
        c=float(input("enter the celsius"))
        op1=op1+[c,celsiustofahrenheit(c)]
        print(sorted(op1))
    elif(op=="2"):
        p=float(input("enter the fahrenhiet"))
        op2=op2+[p,fahrenheittocelsius(p)]
        print(sorted(op2))
    elif(op=="3"):
        x=float(input("enter celsius"))
        op3=op3+[x,celsiustokelvin(x)]
        print(sorted(op3))
    elif(op=="4"):
        y=float(input("enter kelvin"))
        op4=op4+[y,kelvintocelsius(y)]
        print(sorted(op4))
    elif(op=="5"):
        a=float(input("enter fahrenhiet"))
        op5=op5+[a,fahrenheittokelvin(a)]
        print(sorted(op5))
    elif(op=="6"):
        b=float(input("enter kelvin"))
        op6=op6+[b,kelvintofahrenheit(b)]
        print(sorted(op6))

    else:
        print("invalid output")

    select:input("y to yes n to no")