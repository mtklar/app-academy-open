def element_count(arr)
    hash = Hash.new(0)

    arr.each do |ele|
        hash[ele] += 1
    end

    hash
end

# Works
def char_replace!(str, hash)
    str.each_char.with_index do |char, i|
        if hash.include?(char)
            str[i] = hash[char]
        end
    end
end

p char_replace!("hello world", {"l"=>"7", "e"=>"a", " "=>"-", "o"=>"q"}) # => "ha77q-wqr7d"

def product_inject(arr)
    arr.inject { |acc, ele| acc * ele }
end