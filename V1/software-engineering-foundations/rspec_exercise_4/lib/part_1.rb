def my_reject(arr, &prc)
    new_array = []

    arr.each do |ele|
        if prc.call(ele) == false
            new_array << ele
        end
    end

    new_array
end

def my_one?(arr, &prc)
    count = 0
    arr.each do |ele|
        if prc.call(ele) == true
            count += 1
        end
    end
    
    if count != 1
        return false
    else
        return true
    end
end

def hash_select(hash, &prc)
    new_hash = {}

    hash.each do |k, v|
        if prc.call(k, v)
            new_hash[k] = v
        end
    end

    new_hash
end 

def xor_select(arr, prc_1, prc_2)
    new_array = []

    arr.each do |ele|
        if (prc_1.call(ele) && !prc_2.call(ele)) || (!prc_1.call(ele) && prc_2.call(ele))
            new_array << ele
        end
    end

    new_array
end

def proc_count(value, arr)
    count = 0

    arr.each do |prc|
        if prc.call(value)
            count += 1
        end
    end

    count
end

