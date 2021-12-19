
# Real scuffed solution
def zip(*args)
    new_array = []

    (0..args.length).each do |i|
        temp_array = []
        (0...args.length).each do |j|
            temp_array << args[j][i]
        end
        if temp_array[0] != nil
        new_array << temp_array
        end
    end

    new_array
end

def prizz_proc(arr, prc_1, prc_2)
    new_array = []
    
    arr.each do |ele|
        if (prc_1.call(ele) && !prc_2.call(ele)) || (!prc_1.call(ele) && prc_2.call(ele))
            new_array << ele
        end
    end

    new_array
end

def zany_zip(*arrs)
    new_array = Array.new(arrs.length, nil) { Array.new(arrs.length, nil) }

    (0..args.length).each do |i|
        temp_array = []
        (0...args.length).each do |j|
            temp_array << args[j][i]
        end
        if temp_array[0] != nil
        new_array << temp_array
        end
    end

    new_array

end
