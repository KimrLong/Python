def smallest_num(list):
    min = list[0]
    for a in list:
        if a < min:
            min = a
    return min
print(smallest_num([1, 2, -7, 10]))



        
