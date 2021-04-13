a=[]
size=int(input("enter size"))
for i in range(0,size):
    ele=int(input("enter elements"))
    a.append(ele)
print(a)

mini=min(a)
maxi=max(a)
print(mini,maxi)

pos=int(input("enter position"))
ele=int(input("enter element"))
a.insert(pos,ele)
print(a)

ele=int(input("enter element to be removed"))
a.remove(ele)
print(a)

ele=int(input("enter element"))
if ele in a:
    print("element found")
else:
    print("not found")