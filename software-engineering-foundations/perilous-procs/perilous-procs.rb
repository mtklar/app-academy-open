# Problems can be found here: https://open.appacademy.io/learn/full-stack-online/software-engineering-foundations/perilous-procs

def some?(arr, &prc)
    arr.each do |ele|
        if prc.call(ele)
            return true
        end
    end
return false
end

def exactly?(arr, n, &prc)
    count = 0
    arr.each do |ele|
        if prc.call(ele)
            count += 1
        end
    end

    if count == n
        return true 
    else
        return false
    end
end
