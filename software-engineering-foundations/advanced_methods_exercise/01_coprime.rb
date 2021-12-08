# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

def coprime?(num_1, num_2)
    # Create array of factors for both nums
    num_1_array = (2..num_1).select { |n| num_1 % n == 0 }
    num_2_array = (2..num_2).select { |n| num_2 % n == 0 }
    # See if any of num 1 arrays' factors are inside num 2 array
    return num_1_array.none? { |n| num_2_array.include?(n)}
end

p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false
