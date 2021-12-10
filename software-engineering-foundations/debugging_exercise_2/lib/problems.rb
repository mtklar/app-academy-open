# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

require "byebug"

def largest_prime_factor(num)
    (1..num).reverse_each do |i|
        if num % i == 0 && isprime?(i)
            return i
        end
    end
end

def isprime?(num)
    return false if num < 2

    (2...num).each do |factor|
        if num % factor == 0
            return false
        end
    end
    return true
end

def chars_in_string(str)
    char_hash = Hash.new(0)
    str.each_char do |char|
        char_hash[char] += 1
    end
    return char_hash
end

def unique_chars?(str)
    chars_in_string(str).each do |k,v|
        if v > 1
            return false
        end
    end
    return true
end

# Returns a hash with the index of all 
# strings/char in the array that are duplicates 
def dupe_indices(arr)
    char_hash = Hash.new(0)
    arr.each do |ele|
        char_hash[ele] += 1
    end 

    temp_array = []
    dupe_indices = {}
    char_hash.each do |k, v|
        if v > 1
            arr.each_with_index do |ele, i|
                if k.include?(ele)
                    temp_array << i
                end
            end
            dupe_indices[k] = temp_array
            temp_array = []
        end
    end
    dupe_indices
end