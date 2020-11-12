
x = [[0, 2,], [4, 5], [6,7]]
y = [[2, 3], [4, 5], [6,8]]
z = [[1, 4], [3, 5], [4, 7]]

result = [[0, 0], [0, 0], [0, 0]]

for i in range(len(x)):
    for j in range(len(x[0])):
        result[i][j] = x[i][j] + y[i][j] + z[i][j]
for r in result:
    print(r)