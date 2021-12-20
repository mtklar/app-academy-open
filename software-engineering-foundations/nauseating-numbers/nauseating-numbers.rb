def strange_sums(arr)
    count = 0

    (0...arr.length).each do |i|
        (i + 1...arr.length).each do |j|
            if arr[i] + arr[j] == 0
                count += 1
            end
        end
    end

    count
end

def pair_product(arr, prod)
    count = 0
    flattened = arr.flatten

    (0...flattened.length).each do |i|
        (i + 1...flattened.length).each do |j|
            if flattened[i] * flattened[j] == prod
                return true
            end
        end
    end

    return false
end

def rampant_repeats(str, hash)
    new_string = ""

    str.each_char do |char|
        if hash.keys.include?(char)
            hash[char].times { new_string += char }
        else 
            new_string += char
        end
    end

    new_string
end

def perfect_square(num)
    (1..num).each do |i|
        return true if i * i == num
    end

    return false
end

def anti_prime?(num)
    (1..num - 1).each do |i|
        return false if divisors(num) < divisors(i)
    end
    return true
end

def divisors(num)
    count = 0

    (1..num).each do |i|
        count += 1 if num % i == 0
    end

    return count
end

def matrix_addition(mat_a, mat_b)
    new_mat = mat_a.dup

    (0...new_mat.length).each do |i|
        (0...new_mat[i].length).each do |j|
            new_mat[i][j] = mat_a[i][j] + mat_b[i][j]
        end
    end

    new_mat
end 

def mutual_factors(*args)
    factors_array = []
    new_array = []

    args.each do |ele|
        (1..ele).each do |i|
            factors_array << i if ele % i == 0
        end
    end

    (0...factors_array.length).each do |i|
        count = 1
        (i + 1...factors_array.length).each do |j|
            count += 1 if factors_array[i] == factors_array[j]
        end
        new_array << factors_array[i] if count == args.length
    end

    new_array
end

# its just that easy
def tribonacci_number(num)
    trib = [1, 1, 2]

    (3...num).each do |i|
        trib << (trib[i - 3] + trib[i - 2] + trib[i - 1])
    end

    trib[num - 1]
end

# definitely not the prettiest way to do this, for some reason
# converting it to a hash helped me visualize the 3d array
# better
def matrix_addition_reloaded(*args)
    length = args[0].length
    args.each do |arg|
        return nil if arg.length != length
    end

    hash = {}

    count = 0
    args.each do |ele|
        hash[count] = ele
        count += 1
    end

    new_array = hash[0]
    hash.delete(0)
    hash.each do |k,v|
        v.each.with_index do |ele, i|
            ele.each.with_index do |dig, j|
                new_array[i][j] += dig
            end
        end
    end

    new_array
end

def squarocol?(arr)
    # Check if row is the same
    arr.each do |row|
        if row.all? { |ele| ele == row[0] } 
            return true
        end
    end

    rotated = arr.dup
    (0...arr.length).each do |i|
        (0...arr[i].length).each do |j|
            rotated[i][j] = arr[j][i]
        end
    end

    p arr
    p rotated

    # Check if row is the same, but since we rotated the array these are basically the columns
    rotated.each do |row|
        if row.all? { |ele| ele == row[0] } 
            return true
        end
    end

    return false

end

p squarocol?([
    [:a, :x , :d],
    [:b, :x , :e],
    [:c, :x , :f],
]) # true

p squarocol?([
    [:x, :y, :x],
    [:x, :z, :x],
    [:o, :o, :o],
]) # true

p squarocol?([
    [:o, :x , :o],
    [:x, :o , :x],
    [:o, :x , :o],
]) # false

p squarocol?([
    [1, 2, 2, 7],
    [1, 6, 6, 7],
    [0, 5, 2, 7],
    [4, 2, 9, 7],
]) # true

p squarocol?([
    [1, 2, 2, 7],
    [1, 6, 6, 0],
    [0, 5, 2, 7],
    [4, 2, 9, 7],
]) # false