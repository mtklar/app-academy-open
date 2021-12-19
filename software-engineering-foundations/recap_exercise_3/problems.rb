def no_dupes?(arr)
    hash = Hash.new(0)
    arr.each do |ele|
        hash[ele] += 1
    end
    new_array = []

    hash.each do |k, v|
        if v == 1
            new_array << k
        end
    end
    new_array
end

def no_consecutive_repeats?(arr)
    bool = true
    (0...arr.length - 1).each do |i|
        if arr[i] == arr[i+1]
            bool = false
            break;
        end
    end
    bool
end

def char_indices(str)
    hash = Hash.new { |h, k| h[k] = [] }

    str.each_char.with_index do |char, i|
        hash[char] << i
    end

    hash
end

def longest_streak(str)
    streak_array = []

    current_string = ""
    str.each_char.with_index do |char, i|
        if str[i] == str[i+1]
            current_string += char
        else
            current_string += char
            streak_array << current_string
            current_string = ""
        end
    end

    biggest = ""
    (0...streak_array.length - 1).each do |i|
        if streak_array[i + 1].length >= streak_array[i].length
            biggest = streak_array[i + 1]
        end
    end

    biggest
end

def bi_prime?(num)
    primes = return_primes(num)
    bool = false
    
    (0...primes.length).each do |i|
        (i...primes.length).each do |j|
            if primes[i] * primes[j] == num
                bool = true
            end
        end
    end

    bool

end


def return_primes(num)
    new_array = []

    (2..num).each do |i|
        if prime?(i)
            new_array << i
        end
    end

    new_array
end

def prime?(num)
    count = 0
    (2..num).each do |i|
        if num % i == 0
            count += 1
        end
    end

    if num < 2
        return false
    elsif count > 1
        return false
    else
        return true
    end
end

def vigenere_cipher(message, keys)
    alpha = ("a".."z").to_a

    (0...message.length).each do |i|
        message[i] = alpha[(alpha.index(message[i]) + keys[i % keys.length]) % 26]
    end

    message
end

def vowel_rotate(str)
    vowels = "aeiou"
    last_vowel = ""
    new_word = ""

    (0...str.length).reverse_each do |i|
        if vowels.include?(str[i])
            last_vowel = str[i]
            break
        end
    end

    str.each_char.with_index do |char, i|
        first = true
        if vowels.include?(char) && !first
            new_word += last_vowel
            last_vowel = char
        elsif vowels.include?(char)
            new_word += last_vowel
            last_vowel = char
        else
            new_word += char
        end 
    end

    new_word
end

class String

    def select(&prc)
        return "" if prc.nil?

        new_string = ""

        self.each_char do |char|
            if prc.call(char)
                new_string += char
            end
        end
        return new_string
    end

    def map!(&prc)
        self.each_char.with_index do |char, i|
            self[i] = prc.call(char, i)
        end
    end

end


# Had to look at the solutions for the remaining.
# Really struggling with recursion
def multiply(num, num2)
    if num2 == 0
        return 0
    elsif num2 < 0
        return -(num - multiply(num, num2 + 1))
    else
        return num + multiply(num, num2 - 1)
    end
end

def lucas_sequence(num)
    return [] if length == 0
    return [2] if length == 1
    return [2, 1] if length == 2

    seq = lucas_sequence(length-1)
    next_el = seq[-1] + seq[-2]
    seq << next_el
    seq
end

def prime_factorization(num)
    (2..num).each do |fact|
        if num % fact == 0
            other_fact = num / fact
            return [ *prime_factorization(fact), *prime_factorization(other_fact) ]
        end
    end

    [ num ]
end