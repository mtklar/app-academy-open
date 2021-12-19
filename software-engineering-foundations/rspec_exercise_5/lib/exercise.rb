
# Real scuffed solution
def zip(*args)
    new_array = Array.new(args[0].length) { Array.new(args.length, nil)}

    (0...args.length).each do |i|
        (0...args[i].length).each do |j|
                new_array[j][i] = args[i][j]
        end
    end

    new_array

end

def prizz_proc(arr, prc_1, prc_2)
    new_array = []
    
    arr.each do |ele|
        if (prc_1.call(ele) && !prc_2.call(ele)) || (!prc_1.call(ele) && prc_2.call(ele))
            new_array << ele
        end
    end

    new_array
end


# should accept any number of arrays as arguments
# should return a 2D array where each subarray contains the elements at the same index from each argument
# should use nil to substitute elements for the array that are too short
def zany_zip(*arrs)
    longest = arrs.max_by { |arrays| arrays.length }

    new_array = Array.new(longest.length) { Array.new(arrs.length, nil)}

    (0...arrs.length).each do |i|
        (0...arrs[i].length).each do |j|
            new_array[j][i] = arrs[i][j]
        end
    end

    new_array
end
# array_1 = ['a', 'b', 'c'] 
# array_2 = [1, 2, 3] 
# array_3 = [11, 13, 15, 17] 
# array_4 = ['v', 'w', 'x', 'y', 'z']

# zany_zip(array_1, array_2, array_3, array_4) =>
# ["a", 1,    11,     "v"],
# ["b", 2,    13,     "w"],
# ["c", 3,    15,     "x"],
# [nil, nil,  17,     "y"],
# [nil, nil,  nil,    "z"]

def maximum(arr, &prc)
    maximum = 0
    element = arr[0] # set to arr[0] so we get the type

    arr.each do |ele|
        if prc.call(ele) >= maximum
            maximum = prc.call(ele)
            element = ele
        end
    end

    return element
end

# very important to remember (wrote this down in inkdrop)
def my_group_by(arr, &prc)
    hash = Hash.new { |h, k| h[k] = [] }

    arr.each do |ele|
        hash[prc.call(ele)] << ele
    end

    hash
end

def max_tie_breaker(array, tie_breaker, &prc)
    return nil if array.empty?
    max = array.first
    array.each do |el|
        result_el = prc.call(el)
        result_max = prc.call(max)
        if result_el > result_max
            max = el
        elsif result_el == result_max && tie_breaker.call(el) > tie_breaker.call(max)
            max = el
        end
    end
    max 
end

# Looked at the solution on these ones. Not too concerned.
def change_word(word)
    indices = vowel_indices(word)
    word[indices.first..indices.last]
end

def vowel_indices(word)
    vowels = 'aeiou'
    indices = []
    word.each_char.with_index do |char, i|
        indices << i if vowels.include?(char)
    end
    indices
end

def silly_syllables(sentence)
    words = sentence.split(' ')
    new_words = words.map do |word|
        num_vowels = vowel_indices(word).length
        if num_vowels < 2
            word
        else
            change_word(word)
        end
    end
    new_words.join(' ')
end


