def partition(arr, num)
    array_left = []
    array_right = []
    array_complete = []
    arr.each do |ele|
        if ele >= num
            array_right << ele
        else
            array_left << ele
        end
    end
    array_complete << array_left
    array_complete << array_right
    array_complete
end

def merge(hash_1, hash_2)
    new_hash = {}
    hash_1.each do |k,v|
        new_hash[k] = v
    end
    hash_2.each do |k,v|
        new_hash[k] = v
    end
    new_hash
end

def censor(str, curse)
    array = str.split
    vowels = "aeiou"
    array.each do |word|
        if curse.include?(word.downcase)
            word.each_char.with_index do |char, i|
                if vowels.include?(char.downcase)
                    word[i] = "*"
                end
            end
        end
    end
    array.join(" ")
end

# Bit confused about this one, took a lot from google. Might need to brush up on math knowledge...
def power_of_two?(num)
    while num != 1
        num = num / 2
        if num % 2 != 0 && num != 1
            return false
        end
    end
    return true
end
