# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(str)
temp_array = []
string_array = []
# create a 2d array where each character gets its own row
# we use this later to determine the amount of characters
# to create a string
str.each_char.with_index do |char, i|
    temp_array << char
    if str[i] != str[i+1]
        string_array << temp_array
        temp_array = []
    end
end

new_string = ""
# iterate over each array in the array, taking the array length (amount of letters)
# and adding that to the first letter of the array and building the string
string_array.each do |ele|
if ele.length > 1
    new_string += ele.length.to_s + ele[0]
else
    new_string += ele[0]
end
end

p new_string

    
end


p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
