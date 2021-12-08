# Write a method, max_inject(arr), that accepts any amount of numbers arguments and returns
# the largest number. Solve this using the built-in inject.

# take infinite args
def max_inject(*args)
    # inject accumulator set at 0, we just replace it with the element if the element is larger, ending up with the largest number.
    args.inject(0) do |acc, el|
        if el > acc
            acc = el
        else
            acc
        end       
    end
end


p max_inject(1, -4, 0, 7, 5)  # => 7
p max_inject(30, 28, 18)      # => 30
