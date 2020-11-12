a = [1,2,3,4]
b = [2,3,4,5]

print("first : " + str(a))
print("second : " + str(b))

answer = []
for i in range(0, len(a)):
    answer.append(a[i] * b[i])

print("Outcome is: " + str(answer))