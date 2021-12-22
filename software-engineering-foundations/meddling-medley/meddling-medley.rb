def duos(string)
    count = 0

    (0...string.length - 1).each do |i|
        if string[i] == string[i + 1]
            count += 1
        end
    end

    count
end

# p duos('bootcamp')      # 1
# p duos('wxxyzz')        # 2
# p duos('hoooraay')      # 3
# p duos('dinosaurs')     # 0
# p duos('e')             # 0

def sentence_swap(sentence, hash)
    split = sentence.split
    new_sentence = []

    split.each do |word|
        if hash.keys.include?(word)
            new_sentence << hash[word]
        else
            new_sentence << word
        end
    end

    new_sentence.join(" ")
end

# p sentence_swap('anything you can do I can do',
#     'anything'=>'nothing', 'do'=>'drink', 'can'=>'shall'
# ) # 'nothing you shall drink I shall drink'

# p sentence_swap('what a sad ad',
#     'cat'=>'dog', 'sad'=>'happy', 'what'=>'make'
# ) # 'make a happy ad'

# p sentence_swap('keep coding okay',
#     'coding'=>'running', 'kay'=>'pen'
# ) # 'keep running okay'

def hash_mapped(hash, prc, &prcblock)
    hash_new = {}

    hash.each do |k, v|
        new_key = prcblock.call(k)
        new_value = prc.call(v)
        hash_new[new_key] = new_value
    end

    hash_new
end

# double = Proc.new { |n| n * 2 }
# p hash_mapped({'a'=>4, 'x'=>7, 'c'=>-3}, double) { |k| k.upcase + '!!' }
# # {"A!!"=>8, "X!!"=>14, "C!!"=>-6}

# first = Proc.new { |a| a[0] }
# p hash_mapped({-5=>['q', 'r', 's'], 6=>['w', 'x']}, first) { |n| n * n }
# # {25=>"q", 36=>"w"}

def counted_characters(string)
    hash = Hash.new(0)
    new_array = []

    string.each_char do |char|
        hash[char] += 1
    end

    hash.each do |k, v|
        if v > 2
            new_array << k
        end
    end

    new_array
end

# p counted_characters("that's alright folks") # ["t"]
# p counted_characters("mississippi") # ["i", "s"]
# p counted_characters("hot potato soup please") # ["o", "t", " ", "p"]
# p counted_characters("runtime") # []

def triplet_true(string)
    (0...string.length - 2).each do |i|
        if string[i] == string[i + 1] && string[i] == string[i+2]
            return true 
        end
    end
    return false
end

# p triplet_true('caaabb')        # true
# p triplet_true('terrrrrible')   # true
# p triplet_true('runninggg')     # true
# p triplet_true('bootcamp')      # false
# p triplet_true('e')             # false

def energetic_encoding(string, hash)
    new_string = ""

    string.each_char do |char|
        if hash.keys.include?(char)
            new_string += hash[char]
        elsif char == " "
            new_string += " "
        else
            new_string += "?"
        end
    end

    new_string
end

# p energetic_encoding('sent sea',
#     'e'=>'i', 's'=>'z', 'n'=>'m', 't'=>'p', 'a'=>'u'
# ) # 'zimp ziu'

# p energetic_encoding('cat',
#     'a'=>'o', 'c'=>'k'
# ) # 'ko?'

# p energetic_encoding('hello world',
#     'o'=>'i', 'l'=>'r', 'e'=>'a'
# ) # '?arri ?i?r?'

# p energetic_encoding('bike', {}) # '????'

# Love this solution
def uncompress(string)
    new_string = ""

    step = 2
    i = 0
    while i < string.length
        new_string += string[i] * string[i + 1].to_i
        i += step
    end

    new_string
end

# p uncompress('a2b4c1') # 'aabbbbc'
# p uncompress('b1o2t1') # 'boot'
# p uncompress('x3y1x2z4') # 'xxxyxxzzzz'

def conjunct_select(arr, *prcs)
    new_array = []
    prc_amount = prcs.length

    arr.each do |ele|
        count = 0
        prcs.each do |prc|
            if prc.call(ele)
                count += 1
            end
        end
        if count == prc_amount
            new_array << ele
        end
    end

    new_array
end

# is_positive = Proc.new { |n| n > 0 }
# is_odd = Proc.new { |n| n.odd? }
# less_than_ten = Proc.new { |n| n < 10 }

# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive) # [4, 8, 11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd) # [11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd, less_than_ten) # [7]

def convert_pig_latin(sentence)
    vowels = "aeiou"
    split = sentence.split
    new_sentence = []

    split.each.with_index do |word, word_index|
        temp_word = word

        if word.length >= 3 && vowels.include?(word[0].downcase)
            temp_word += "yay"
        elsif word.length >= 3 && !vowels.include?(word[0].downcase)
            i = 0
            while !vowels.include?(temp_word[0])
                temp_word += temp_word[0]
                temp_word[0] = ""
            end
            temp_word += "ay"
        end

        if word[0] == word[0].upcase
            new_sentence << temp_word.capitalize
        else
            new_sentence << temp_word
        end
    end

    new_sentence.join(" ")
end

# p convert_pig_latin('We like to eat bananas') # "We ikelay to eatyay ananasbay"
# p convert_pig_latin('I cannot find the trash') # "I annotcay indfay ethay ashtray"
# p convert_pig_latin('What an interesting problem') # "Atwhay an interestingyay oblempray"
# p convert_pig_latin('Her family flew to France') # "Erhay amilyfay ewflay to Ancefray"
# p convert_pig_latin('Our family flew to France') # "Ouryay amilyfay ewflay to Ancefray"

def reverberate(sentence)
    vowels = "aeiou"
    split = sentence.split
    new_sentence = []

    split.each.with_index do |word, word_index|
        temp_word = word

        if word.length >= 3 && vowels.include?(word[-1].downcase)
            temp_word += temp_word
        elsif word.length >= 3 && !vowels.include?(word[-1].downcase)
            index = 0

            i = word.length - 1
            while i > 0
                if vowels.include?(word[i])
                    index = i 
                    break
                end
                i -= 1
            end

            temp_word += word[index..-1]
        end

        if word[0] == word[0].upcase
            new_sentence << temp_word.capitalize
        else
            new_sentence << temp_word
        end
    end

    new_sentence.join(" ")
end

# p reverberate('We like to go running fast') # "We likelike to go runninging fastast"
# p reverberate('He cannot find the trash') # "He cannotot findind thethe trashash"
# p reverberate('Pasta is my favorite dish') # "Pastapasta is my favoritefavorite dishish"
# p reverberate('Her family flew to France') # "Herer familyily flewew to Francefrance"

def disjunct_select(arr, *prcs)
    new_array = []

    arr.each do |ele|
            prcs.each do |prc|
                if prc.call(ele)
                    new_array << ele
                    break
                end
            end
    end

    new_array
end

# longer_four = Proc.new { |s| s.length > 4 }
# contains_o = Proc.new { |s| s.include?('o') }
# starts_a = Proc.new { |s| s[0] == 'a' }

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
# ) # ["apple", "teeming"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o
# ) # ["dog", "apple", "teeming", "boot"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o,
#     starts_a
# ) # ["ace", "dog", "apple", "teeming", "boot"]

def alternating_vowel(sentence)
    vowels = "aeiou"
    switch = false
    split = sentence.split
    new_sentence = []

    split.each do |word|
        temp_word = word
        if switch
            (0...word.length).each do |i|
                if vowels.include(word[i])
                    temp_word[i] = "?"
                    puts temp_word
                end
            end
        end
    end

end

p alternating_vowel('panthers are great animals') # "pnthers ar grat animls"
p alternating_vowel('running panthers are epic') # "rnning panthrs re epc"
p alternating_vowel('code properly please') # "cde proprly plase"
p alternating_vowel('my forecast predicts rain today') # "my forecst prdicts ran tday"