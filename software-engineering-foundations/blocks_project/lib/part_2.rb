def all_words_capitalized?(arr)
    arr.all? { |ele| ele == ele.capitalize }
end

def no_valid_url?(arr)
    arr.none? { |ele| ele.end_with?(".com", ".net", ".io", ".org")}
end

def any_passing_students?(hash_arr)
    hash_arr.any? { |ele| (ele[:grades].sum / ele[:grades].length) >= 75}
end
