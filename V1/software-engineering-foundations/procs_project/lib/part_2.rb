# Finding this whole procs and blocks thing kinda confusing, but it seemed to go kinda well?
def reverser(str, &prc)
    str.reverse!
    prc.call(str)
end

def word_changer(str, &prc)
    array = str.split
    new_array = []
    array.each do |word|
        new_array << prc.call(word)
    end
    new_array.join(" ")
end

def greater_proc_value(num, prc, prc2)
    if prc.call(num) > prc2.call(num)
        return prc.call(num)
    else
        return prc2.call(num)
    end
end

def and_selector(arr, prc_1, prc_2)
    new_array = []

    arr.each do |ele|
        if prc_1.call(ele) && prc_2.call(ele)
            new_array << ele
        end
    end

    new_array
end

def alternating_mapper(arr, prc, prc_2)
    new_array = []

    arr.each_with_index do |ele, i|
        if i % 2 == 0 && i != 1
            new_array << prc.call(ele)
        else
            new_array << prc_2.call(ele)
        end
    end

    new_array
end
