# input_string = "I am a leet programmer"
# mapping = {'a': 4,
#            'e': 3,
#            'g': 6,
#            'i': 1,
#            'o': 0,
#            's': 5,
#            't': 7}
# new_string = ""
# for character in input_string:
#     if character in mapping:
#         character = str(mapping[character])
#     new_string += character
# print(new_string)


word = input('The word: ').upper()

result = ''

# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7

for char in word:
    result_char = char
    if result_char == 'A':
        result_char = '4'
    if result_char == 'E':
        result_char = '3'
    if result_char == 'G':
        result_char = '6'
    if result_char == 'I':
        result_char = '1'
    if result_char == 'O':
        result_char = '0'
    if result_char == 'S':
        result_char = '5'
    if result_char == 'T':
        result_char = '7'
    result = result + result_char


print(result)