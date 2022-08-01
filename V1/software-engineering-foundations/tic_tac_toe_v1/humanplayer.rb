class HumanPlayer

    attr_reader :mark_value

    def initialize(mark_value)
        @mark_value = mark_value
    end

    def get_position
        new_array = []
        puts "Player #{@mark_value}, please enter your position in the format of row col"
        response = gets.chomp
        if (response[0].to_i < 0 || response[0].to_i > 9) || (response[1] != " ") || (response[2].to_i < 0 || response[2].to_i > 9)
            raise "Input is invalid"
        end
        new_array << response[0].to_i
        new_array << response[2].to_i


        new_array
    end

end