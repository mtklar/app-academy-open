def is_prime?(num)
    return false if num < 2

    (2...num - 1).each do |i|
        return false if num % i == 0
    end

    return true
end

def nth_prime(n)
    prime_array = []
    i = 0
    while prime_array.length != n
        if is_prime?(i)
            prime_array << i
        end
        i += 1
    end
    prime_array[n-1]
end

def prime_range(min, max)
    new_array = []

    (min..max).each do |i|
        if is_prime?(i)
            new_array << i
        end
    end

    new_array
end