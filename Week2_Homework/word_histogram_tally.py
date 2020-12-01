#Sorting histogram

#Given a histogram tally (one returned from either letter_histogram or word_histogram),
#  print the top 3 words or letters.


def letter_count(word):
    letter_freq={}  
    for letter in word:
        if letter not in letter_freq:
            letter_freq[letter] = 1
        else:
            letter_freq[letter] += 1
    for item in letter_freq:
        print(letter_freq[item])

    return letter_freq

print(letter_count("onomatopoeia.Brrrrrr!"))

# import LetterSummary
# import wordSummary
# def top3(dict):
#     topList = []
#     for i in range(0, 3):
#         max1 = (max(dict.values()))
#         for item in dict:
#             if dict[item] == max1:
#                 topList.append(item)
#                 break
#         del dict[item]
#     print(topList)
# top3(LetterSummary.letter_histogram("bananas ssssss"))






