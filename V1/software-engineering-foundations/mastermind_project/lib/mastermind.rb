require_relative "code"

class Mastermind

    def initialize(number)
        @secret_code = Code.random(number)
    end

    def print_matches(code_instance)
        puts "Exact matches: #{@secret_code.num_exact_matches(code_instance)}"
        puts "Near matches: #{@secret_code.num_near_matches(code_instance)}"
    end

    def ask_user_for_guess
        puts "Enter a code"
        input_string = gets.chomp
        code = Code.from_string(input_string)
        puts "Exact matches: #{@secret_code.num_exact_matches(code)}"
        puts "Near matches: #{@secret_code.num_near_matches(code)}"
        @secret_code == code
    end

end
