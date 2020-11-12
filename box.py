#Building a box

print("Here we can build a box")

height = int(input("How tall would you like the box?: "))
width = int(input("How wide would you like the box?: "))

box = ("*" * width)
print(box)

for _ in range(height - 2):
    print("*" + " " * (width - 2) + '*')

box = ("*" * width)
print(box)