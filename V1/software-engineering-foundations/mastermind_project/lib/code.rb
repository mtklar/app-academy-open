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
      count += 1 if ele == self[i]
    end
    count
  end

  def num_near_matches(code_instance)
    count = 0

    code_instance.pegs.each.with_index do |ele, i|
      if ele != self[i] && self.pegs.include?(ele)
        count += 1
      end
    end

    count
  end

  def ==(code_instance)
   self.pegs == code_instance.pegs
  end

end
