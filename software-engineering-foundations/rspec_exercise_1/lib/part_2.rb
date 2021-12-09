def hipsterfy(str)
vowels = "aeiou"
# Loops goes backwards from the end, removes the first vowel it sees then breaks out of the loop
i = str.length - 1
while i > 0
    if vowels.include?(str[i])
        str[i] = ""
        break
    end
    i -= 1
end
str
end

def vowel_counts(str)
    vowels = "aeiou"
    hash = Hash.new(0)
    str.each_char do |char|
        char.downcase!
        if vowels.include?(char)
            hash[char] += 1
        end
    end
    hash
end

def caesar_cipher(str, num)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    str.each_char.with_index do |char, i|
        if alphabet.include?(char)
            index = alphabet.index(char)
            str[i] = alphabet[(index + num) % 26]
        end
    end
    return str
end