# def shortest_string(text_list):
#     string_len = []
#     for n in text_list:
#         string_len.append((len(n), n))
#     string_len.sort()
#     return string_len[-1][1]

# print(shortest_string(["PHP", "Exercises", "Backend"]))

# def shortest_string(words):
#     text_word = ['Happy', 'sad', 'ok', 'elated']
#     text_length = 0
#     for word in words:
#         if text_length > len(word):
#             text_length = len(word)             
#             text_word = word 
#     return text_word

# print(shortest_string) 



# def shortest_string(words):
#     shortest_word = words[0] 
#     shortest_len = len(shortest_word)
#     for word in words:
#         if shortest_len > len(word):
#             shortest_len = len(word)             
#             shortest_word = word 
#     return shortest_word

# print(shortest_string(["Sorry", "Soon", "Sooner", "Soonest", "So"])) 




words = ["sorry", "so", "soon", "sooner", "soonest"]
def shortest_string(words): 
    shortest_len = len(words[0])
    for a in words:
        if shortest_len > len(a): 
           shortest_len = len(a)  
           shortest_word = a
    return shortest_word

print(shortest_string(words))

