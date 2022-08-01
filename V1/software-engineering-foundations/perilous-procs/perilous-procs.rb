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

def filter_out(arr, &prc)
    new_array = []

    arr.each do |ele|
        if !prc.call(ele)
            new_array << ele
        end
    end

    new_array
end

def at_least?(arr, n, &prc)
    count = 0

    arr.each do |ele|
        if prc.call(ele)
            count += 1
        end
    end

    if count >= n
        return true
    else 
        return false
    end
end

def every?(arr, &prc)
    arr.each do |ele|
        return false if !prc.call(ele)
    end

    return true
end

def at_most?(arr, n, &prc)
    count = 0

    arr.each do |ele|
        if !prc.call(ele)
            count += 1
        end
    end

    if count > n
        return true
    else 
        return false
    end
end

def first_index(arr, &prc)
    arr.each.with_index do |ele, i|
        if prc.call(ele)
            return i
        end
    end
    return nil
end

def xnor_select(arr, prc, prc2)
    new_array = []
    arr.each do |ele|
        if (prc.call(ele) && prc2.call(ele)) || (!prc.call(ele) && !prc2.call(ele))
            new_array << ele
        end
    end
    new_array
end

def filter_out!(arr, &prc)
    i = 0
    while i < arr.length
        if prc.call(arr[i])
            arr.delete_at(i)
            # kinda strange but this puts us back at the start of the array
            # the index gets messed up when we delete something
            i = -1
        end
        i += 1
    end
end

# arr_1 = [10, 6, 3, 2, 5 ]
# filter_out!(arr_1) { |x| x.odd? }
# p arr_1     # [10, 6, 2]

# arr_2 = [1, 7, 3, 5 ]
# filter_out!(arr_2) { |x| x.odd? }
# p arr_2     # []

# arr_3 = [10, 6, 3, 2, 5 ]
# filter_out!(arr_3) { |x| x.even? }
# p arr_3     # [3, 5]

# arr_4 = [1, 7, 3, 5 ]
# filter_out!([1, 7, 3, 5 ]) { |x| x.even? }
# p arr_4 # [1, 7, 3, 5]

def multi_map(arr, n = 1, &prc)
    new_array = []

        arr.each do |ele|
            
            n.times do
               ele = prc.call(ele)
            end
            new_array << ele
        end
   
    new_array
end

# p multi_map(['pretty', 'cool', 'huh?']) { |s| s + '!'}      # ["pretty!", "cool!", "huh?!"]
# p multi_map(['pretty', 'cool', 'huh?'], 1) { |s| s + '!'}   # ["pretty!", "cool!", "huh?!"]
# p multi_map(['pretty', 'cool', 'huh?'], 3) { |s| s + '!'}   # ["pretty!!!", "cool!!!", "huh?!!!"]
# p multi_map([4, 3, 2, 7], 1) { |num| num * 10 }             # [40, 30, 20, 70]
# p multi_map([4, 3, 2, 7], 2) { |num| num * 10 }             # [400, 300, 200, 700]
# p multi_map([4, 3, 2, 7], 4) { |num| num * 10 }             # [40000, 30000, 20000, 70000]

def proctition(arr, &prc)
    new_array = []
    temp_true = []
    temp_false = []

    arr.each do |ele|
        if prc.call(ele)
            temp_true << ele
        else
            temp_false << ele
        end
    end


    new_array = temp_true + temp_false
end

# p proctition([4, -5, 7, -10, -2, 1, 3]) { |el| el > 0 }
# # [4, 7, 1, 3, -5, -10, -2]

# p proctition([7, 8, 3, 6, 10]) { |el| el.even? }
# # [8, 6, 10, 7, 3]

# p proctition(['cat','boot', 'dog', 'bug', 'boat']) { |s| s[0] == 'b' }
# # ["boot", "bug", "boat", "cat", "dog"]

def selected_map!(arr, prc, prc2)
    i = 0
    while i < arr.length
        if prc.call(arr[i])
            arr[i] = prc2.call(arr[i])
        end
        
    i += 1
    end

    return nil
end

# is_even = Proc.new { |n| n.even? }
# is_positive = Proc.new { |n| n > 0 }
# square = Proc.new { |n| n * n }
# flip_sign = Proc.new { |n| -n }

# arr_1 = [8, 5, 10, 4]
# p selected_map!(arr_1, is_even, square)     # nil
# p arr_1                                     # [64, 5, 100, 16]

# arr_2 = [-10, 4, 7, 6, -2, -9]
# p selected_map!(arr_2, is_even, flip_sign)  # nil
# p arr_2                                     # [10, -4, 7, -6, 2, -9]

# arr_3 = [-10, 4, 7, 6, -2, -9]
# p selected_map!(arr_3, is_positive, square) # nil
# p arr_3                                     # [-10, 16, 49, 36, -2, -9]

def chain_map(n, *args)
    flattened = args.flatten
    flattened.each do |prc|
       n = prc.call(n)
    end

    n

end

# add_5 = Proc.new { |n| n + 5 }
# half = Proc.new { |n| n / 2.0 }
# square = Proc.new { |n| n * n }

# p chain_map(25, [add_5, half])          # 15.0
# p chain_map(25, [half, add_5])          # 17.5
# p chain_map(25, [add_5, half, square])  # 225
# p chain_map(4, [square, half])          # 8
# p chain_map(4, [half, square])          # 4

def proc_suffix(sentence, hash)
    split = sentence.split
    new_sentence = []

    split.each do |ele|
        temp_word = ele
        hash.each do |prc, suffix|
            if prc.call(ele)
                temp_word += suffix
            end        
        end
        new_sentence << temp_word
    end

    new_sentence.join(" ")
end

# contains_a = Proc.new { |w| w.include?('a') }
# three_letters = Proc.new { |w| w.length == 3 }
# four_letters = Proc.new { |w| w.length == 4 }

# p proc_suffix('dog cat',
#     contains_a => 'ly',
#     three_letters => 'o'
# )   # "dogo catlyo"

# p proc_suffix('dog cat',
#     three_letters => 'o',
#     contains_a => 'ly'
# )   # "dogo catoly"

# p proc_suffix('wrong glad cat',
#     contains_a => 'ly',
#     three_letters => 'o',
#     four_letters => 'ing'
# )   # "wrong gladlying catlyo"

# p proc_suffix('food glad rant dog cat',
#     four_letters => 'ing',
#     contains_a => 'ly',
#     three_letters => 'o'
# )   # "fooding gladingly rantingly dogo catlyo"

def proctition_platinum(arr, *prcs)
    hash = Hash.new { |h, k| h[k] = [] }

    arr.each do |ele|
        flagged = false
        prcs.each.with_index do |prc, i|
            if prc.call(ele) && !flagged
                hash[i+1] << ele
                flagged = true
            end
        end
    end

    hash.sort.to_h
end

# is_yelled = Proc.new { |s| s[-1] == '!' }
# is_upcase = Proc.new { |s| s.upcase == s }
# contains_a = Proc.new { |s| s.downcase.include?('a') }
# begins_w = Proc.new { |s| s.downcase[0] == 'w' }

# p proctition_platinum(['WHO', 'what', 'when!', 'WHERE!', 'how', 'WHY'], is_yelled, contains_a)
# # {1=>["when!", "WHERE!"], 2=>["what"]}

# p proctition_platinum(['WHO', 'what', 'when!', 'WHERE!', 'how', 'WHY'], is_yelled, is_upcase, contains_a)
# # {1=>["when!", "WHERE!"], 2=>["WHO", "WHY"], 3=>["what"]}

# p proctition_platinum(['WHO', 'what', 'when!', 'WHERE!', 'how', 'WHY'], is_upcase, is_yelled, contains_a)
# # {1=>["WHO", "WHERE!", "WHY"], 2=>["when!"], 3=>["what"]}

# p proctition_platinum(['WHO', 'what', 'when!', 'WHERE!', 'how', 'WHY'], begins_w, is_upcase, is_yelled, contains_a)
# # {1=>["WHO", "what", "when!", "WHERE!", "WHY"], 2=>[], 3=>[], 4=>[]}

def procipher(sentence, hash)
    split = sentence.split
    new_sentence = []

    split.each do |word|
        temp_word = word.dup
        hash.each do |k, v|
            if k.call(word)
                temp_word = v.call(temp_word)
            end
        end
        new_sentence << temp_word
    end

    new_sentence.join(" ")

end

# is_yelled = Proc.new { |s| s[-1] == '!' }
# is_upcase = Proc.new { |s| s.upcase == s }
# contains_a = Proc.new { |s| s.downcase.include?('a') }
# make_question = Proc.new { |s| s + '???' }
# reverse = Proc.new { |s| s.reverse }
# add_smile = Proc.new { |s| s + ':)' }

# p procipher('he said what!',
#     is_yelled => make_question,
#     contains_a => reverse
# ) # "he dias ???!tahw"

# p procipher('he said what!',
#     contains_a => reverse,
#     is_yelled => make_question
# ) # "he dias !tahw???"

# p procipher('he said what!',
#     contains_a => reverse,
#     is_yelled => add_smile
# ) # "he dias !tahw:)"

# p procipher('stop that taxi now',
#     is_upcase => add_smile,
#     is_yelled => reverse,
#     contains_a => make_question
# ) # "stop that??? taxi??? now"

# p procipher('STOP that taxi now!',
#     is_upcase => add_smile,
#     is_yelled => reverse,
#     contains_a => make_question
# ) # "STOP:) that??? taxi??? !won"

def picky_procipher(sentence, hash)
    split = sentence.split
    new_sentence = []

    split.each do |word|
        flagged = false
        temp_word = word.dup
        hash.each do |k, v|
            if k.call(word) && !flagged
                temp_word = v.call(temp_word)
                flagged = true
            end
        end
        new_sentence << temp_word
    end

    new_sentence.join(" ")
end

is_yelled = Proc.new { |s| s[-1] == '!' }
is_upcase = Proc.new { |s| s.upcase == s }
contains_a = Proc.new { |s| s.downcase.include?('a') }
make_question = Proc.new { |s| s + '???' }
reverse = Proc.new { |s| s.reverse }
add_smile = Proc.new { |s| s + ':)' }

p picky_procipher('he said what!',
    is_yelled => make_question,
    contains_a => reverse
) # "he dias what!???"

p picky_procipher('he said what!',
    contains_a => reverse,
    is_yelled => make_question
) # "he dias !tahw"

p picky_procipher('he said what!',
    contains_a => reverse,
    is_yelled => add_smile
) # "he dias !tahw"

p picky_procipher('stop that taxi now',
    is_upcase => add_smile,
    is_yelled => reverse,
    contains_a => make_question
) # "stop that??? taxi??? now"

p picky_procipher('STOP that taxi!',
    is_upcase => add_smile,
    is_yelled => reverse,
    contains_a => make_question
) # "STOP:) that??? !ixat"