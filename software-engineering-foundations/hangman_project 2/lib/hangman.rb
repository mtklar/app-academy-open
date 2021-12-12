class Hangman
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  def self.random_word
    DICTIONARY.sample
  end

  # Why can't I use self.random_word instead of Hangman.random_word?
  def initialize
    @secret_word = Hangman.random_word
    @guess_word = Array.new(@secret_word.length, "_")
    @attempted_chars = []
    @remaining_incorrect_guesses = 5
  end

  def guess_word
    @guess_word
  end

  def attempted_chars
    @attempted_chars
  end

  def remaining_incorrect_guesses
    @remaining_incorrect_guesses
  end

  def already_attempted?(char)
    if @attempted_chars.include?(char)
      return true
    else
      return false
    end
  end

  def get_matching_indices(char)
    new_array = []
    @secret_word.each_char.with_index do |ele, i|
      if ele.include?(char)
        new_array << i
      end
    end
    new_array
  end

  def fill_indices(char, arr)
    arr.each do |ele|
      @guess_word[ele] = char
    end
  end

  def try_guess(char)
    indices = get_matching_indices(char)
    attempt = already_attempted?(char)

    if attempt
      puts "that has already been attempted"
      return false
    end

    if !attempt
      if indices.length == 0
        @remaining_incorrect_guesses -= 1
      end
      fill_indices(char, indices)
      @attempted_chars << char
      return true
    end
  end

  def ask_user_for_guess
    puts "Enter a char:"
  input = gets.chomp
  try_guess(input)
  end

  def win?
    word = guess_word.join("")
    if word == @secret_word
      puts "WIN"
      return true
    else
      return false
    end
  end

  def lose?
    if @remaining_incorrect_guesses == 0
      puts "LOSE"
      return true
    else
      return false
    end
  end

  def game_over?
    if win? || lose?
      puts @secret_word
      return true
    else
      return false
    end
  end

end
