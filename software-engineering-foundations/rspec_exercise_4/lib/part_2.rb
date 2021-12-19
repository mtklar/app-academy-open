def proper_factors(num)
    new_array = []
    (1..num/2).each do |i|
        new_array << i if num % i == 0
    end
    new_array
end

def aliquot_sum(num)
    proper_factors(num).sum
end

def perfect_number?(num)
    if num == aliquot_sum(num)
        return true
    else
        return false
    end
end

# Feel like there must be a better loop choice for this?
def ideal_numbers(n)
    new_array = []

    i = 1
    while new_array.length != n
        new_array << i if perfect_number?(i)
        i += 1
    end

    new_array
end