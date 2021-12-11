# This is ridiculously confusing...
def my_map(arr, &prc)
    new_array = []
    arr.each { |ele| new_array << prc.call(ele)} 
    new_array
end

def my_select(arr, &prc)
    new_array = []
    arr.each do |ele|
        if prc.call(ele)
            new_array << ele
        end
    end
    new_array
end

def my_count(arr, &prc)
    count = 0
    arr.each do |ele|
        if prc.call(ele)
            count += 1
        end
    end
    count
end

def my_any?(arr, &prc)
    arr.each do |ele|
        if prc.call(ele)
            return true
        end
    end
    false
end

def my_all?(arr, &prc)
    arr.each do |ele|
        if !prc.call(ele)
            return false
        end
    end
    true
end

def my_none?(arr, &prc)
    arr.each do |ele|
        if prc.call(ele)
            return false
        end
    end
    return true
end