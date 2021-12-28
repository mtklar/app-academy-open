class Player 

    attr_reader :name

    def initialize(name)
        @name = name

    end

    def guess(fragment)
        puts "#{@name} enter a letter to extend the word:"
        response = gets.chomp
        while !validPlay?(fragment + response)
            puts "Your letter didn't create a valid word, try again: "
            response = gets.chomp
        end
        return response
    end


end