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








