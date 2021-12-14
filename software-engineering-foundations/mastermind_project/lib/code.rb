class Code

  attr_reader :pegs

  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs?(arr)
    arr.each do |ele|
      if !POSSIBLE_PEGS.has_key?(ele.upcase)
        return false
      end
    end
    return true
  end

  def initialize(pegs)
    if !Code.valid_pegs?(pegs)
      raise "error"
    else
      @pegs = pegs.map(&:upcase)
    end
  end

  def self.random(len)
    random_pegs = []

    len.times do 
      random_pegs << POSSIBLE_PEGS.keys.sample
    end

    Code.new(random_pegs)
  end

  def self.from_string(str)
    char_pegs = str.split("")
    Code.new(char_pegs)
  end

  def [](index)
    @pegs[index]
  end

  def length
    @pegs.length
  end

  def num_exact_matches(code_instance)
    count = 0
    code_instance.pegs.each.with_index do |ele, i|
      if ele == @pegs[i]
        count += 1
      end
    end
    return count
  end

  #   RB
  # RGBB

  # R true false
  # G true false
  # 
  def num_near_matches(code_instance)
    count = 0
    pegs_copy = @pegs
    code_instance.pegs.each.with_index do |ele, i|
      p pegs_copy
      p code_instance.pegs
      if pegs_copy.include?(ele) && ele != pegs_copy[i]
        p ele
        p pegs_copy.include?(ele)
        p ele != pegs_copy[i]
        count += 1
      end
      # if pegs_copy.index(ele) != nil
      #   pegs_copy[pegs_copy.index(ele)] = ""
      # end
      p pegs_copy
    end
    p num_exact_matches(code_instance)
    if count - num_exact_matches(code_instance) <= 0
      return 0
    else
      return count - num_exact_matches(code_instance)
    end
  end

end
