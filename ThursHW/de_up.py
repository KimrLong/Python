


test_list = [1, 3, 5, 6, 3, 5, 6, 1]

res = [] 

for i in range (len(test_list)): 
    if test_list[i] not in res: 
        res.append(test_list[i])

    print(res)