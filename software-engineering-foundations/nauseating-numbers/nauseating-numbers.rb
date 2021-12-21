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

# Check if all elements in a row or column match
def squarocol?(arr)
    # Check if row is the same
    arr.each do |row|
        if row.all? { |ele| ele == row[0] } 
            return true
        end
    end

    # rotate the entire array so that each row is now a column
    cols = []
    (0...arr.length).each do |i|
        temp_array = []
        (0...arr[i].length).each do |j|
            temp_array << arr[j][i]
        end
        cols << temp_array
    end

    # Check if row is the same, but since we rotated the array these are basically the columns
    cols.each do |row|
        if row.all? { |ele| ele == row[0] } 
            return true
        end
    end

    return false
end

# Check if all elements on the diagonals of a 2d array match
def squaragonal?(arr)
    new_array = []
    new_array2 = []

    # Put both diagonals into their own arrays
    (0...arr.length).each do |i|
        new_array << arr[i][i]
        new_array2 << arr[i][(arr.length - 1) - i]
    end
    
    # Check if either of the diagonals have full matching elements
    if (new_array.all? { |ele| ele == new_array[0] }) || (new_array2.all? { |ele| ele == new_array2[0] })
        return true
    else
        return false
    end
end

def pascals_triangle(n)
    triangle = [[1], [1, 1]]

    # Loop for the rows, starting at 2 since i hardcoded the base case
    (2...n).each do |i|
        temp_array = []
        # loop for each column. +1 based on last row length so it keeps growing
        (0...triangle.last.length + 1).each do |j|
            # check 1st edge case, so we don't index outside of the array
            if j == 0
                temp_array << triangle[i-1][j]
            # check last edge
            elsif 
                j == triangle.last.length
                temp_array << triangle[i-1][j-1]
            # fill in the middle
            else
                temp_array << triangle[i-1][j-1] + triangle[i-1][j]
            end
        end
        triangle << temp_array
    end

    triangle
end

