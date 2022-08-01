def select_even_nums(arr)
    arr.select(&:even?)
end

def reject_puppies(hash)
    hash.reject { |ele| ele["age"] < 3}
end

def count_positive_subarrays(arr)
    arr.count { |ele| ele.sum > 0}
end

def aba_translate(str)
    new_word = ""
    vowels = "aeiou"
    str.each_char do |char|
        if vowels.include?(char)
            new_word += char + "b" + char
        else
            new_word += char
        end
    end
    new_word
end

def aba_array(arr)
    arr.map { |ele| aba_translate(ele)}
end



