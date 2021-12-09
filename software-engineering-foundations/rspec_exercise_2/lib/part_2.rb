def palindrome?(str)
    #reverse the string
    reversed = ""
    i = str.length - 1
    while i >= 0
        reversed += str[i]
        i -= 1
    end

    return true if str == reversed
    return false if str != reversed
end

# REALLY MESSY LOOP
def substrings(str)
    substring_array = []
    i = 0
    j = 0
    while i < str.length
        temp_string = ""
        j = 0
        while j + i < str.length
            temp_string += str[i + j]
            substring_array << temp_string
            j += 1
        end
        i+=1
    end
    substring_array
end

# The power of helper methods
def palindrome_substrings(str)
substring_array = substrings(str)
new_array = []
substring_array.each do |word|
    if palindrome?(word) && word.length > 1
        new_array << word
    end
end
return new_array
end
