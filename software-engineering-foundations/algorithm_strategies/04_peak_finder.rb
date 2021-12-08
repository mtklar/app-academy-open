# Write a method, peak_finder(arr), that accepts an array of numbers as an arg.
# The method should return an array containing all of "peaks" of the array.
# An element is considered a "peak" if it is greater than both it's left and right neighbor.
# The first or last element of the array is considered a "peak" if it is greater than it's one neighbor.
def peak_finder(arr)
    # add 0s to the start and end of the array, this makes it easier to compare the edges in the array
 arr.unshift 0
 arr.push 0
 # new array to hold peak values
 peaks_array = []
 # go through array and compare each value with the values next to it, put it into peaks_array if greater than both
 (1...arr.length - 1).each do |i|
    if arr[i] > arr[i-1] && arr[i] > arr[i+1]
        peaks_array << arr[i]
    end
end
return peaks_array
end



p peak_finder([1, 3, 5, 4])         # => [5]
p peak_finder([4, 2, 3, 6, 10])     # => [4, 10]
p peak_finder([4, 2, 11, 6, 10])    # => [4, 11, 10]
p peak_finder([1, 3])               # => [3]
p peak_finder([3, 1])               # => [3]
