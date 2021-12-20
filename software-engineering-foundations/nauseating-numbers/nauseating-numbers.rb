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
        (0...new_mat.length).each do |j|
            new_mat[i][j] = mat_a[i][j] + mat_b[i][j]
        end
    end

    new_mat
end 

matrix_a = [[2,5], [4,7]]
matrix_b = [[9,1], [3,0]]
matrix_c = [[-1,0], [0,-1]]
matrix_d = [[2, -5], [7, 10], [0, 1]]
matrix_e = [[0 , 0], [12, 4], [6,  3]]
p matrix_addition(matrix_a, matrix_b) # [[11, 6], [7, 7]]
p matrix_addition(matrix_a, matrix_c) # [[1, 5], [4, 6]]
p matrix_addition(matrix_b, matrix_c) # [[8, 1], [3, -1]]
p matrix_addition(matrix_d, matrix_e) # [[2, -5], [19, 14], [6, 4]]