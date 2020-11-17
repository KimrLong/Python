
#Word Summary

# Write a word_histogram program that asks the user for a sentence as its input
# and prints a dictionary containing the tally of how many times each word 
# in the alphabet was used in the text.


def word_count(paragraph):
    word_freq={}  #letter_frequency['o'] = 4 letter_frequency = {'o': 4}
    for word in paragraph.split():
        if word not in word_freq:
            word_freq[word] = 1
        else:
            word_freq[word] += 1
    return word_freq
  
val = (input('Enter paragraph here: '))
print(word_count(val))