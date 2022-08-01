class Player

    def get_move
        puts "enter a position with coordinates separated with a space like `4 7`"
        input = gets.chomp
        new_array = input.split
        new_array.map!(&:to_i)

    end

end
