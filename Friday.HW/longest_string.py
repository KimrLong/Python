def longest_string(text_list):
    word_len = []
    for n in text_list:
        word_len.append((len(n), n))
    word_len.sort()
    return word_len[-1][1]

print(longest_string(["Hippo", "Giraffe", "Bird", "Elephant"]))