def largest_num(list):
    max = list[0]
    for a in list:
        if a > max:
            max = a
    return max
print(largest_num([2, -8, 7, 30]))
