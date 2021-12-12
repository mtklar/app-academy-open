# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array

  def span
    if self.length == 0
        return nil
    else
        new_array = self.sort
        return new_array[-1] - new_array[0]
    end
  end

  def average
    if self.length == 0
        return nil
    else
        return self.sum / (self.length * 1.0)
    end
  end

  def median
    sorted = self.sort
    if self.length == 0
        return nil
    elsif self.length % 2 != 0
        return self.sort[(self.length / 2).round]
    else
        return (sorted[(self.length / 2) - 1] + sorted[self.length / 2]) / 2.0
    end
  end

  def counts
    hash = Hash.new(0)
    self.each do |ele|
        hash[ele] += 1
    end
    return hash
  end

  def my_count(any)
    hash = self.counts
    return hash[any]
  end

  def my_index(any)
    self.each_with_index do |ele, i|
        if any == ele
            return i
        end
    end
    return nil
  end

  def my_uniq
    new_array = []
    self.each do |ele|
        if !new_array.include?(ele)
            new_array << ele
        end
    end
    return new_array
  end

  # KINDA GOT LUCKY ON THIS?
  def my_transpose
    new_array = []
    self.each_with_index do |row, i|
        temp_row = []
        row.each_with_index do |column, j|
            temp_row << self[j][i]
        end
        new_array << temp_row
    end
    return new_array
  end

end
