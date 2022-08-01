require_relative "board.rb"
require_relative "humanplayer.rb"

class Game

    attr_reader :player_1, :player_2, :board, :current_player

    def initialize(player_1_mark, player_2_mark)
        @player_1 = HumanPlayer.new(player_1_mark)
        @player_2 = HumanPlayer.new(player_2_mark)
        @board = Board.new
        @current_player = @player_1
    end

    def switch_turn
        if @current_player == @player_1
            @current_player = @player_2
        else
            @current_player = @player_1
        end
    end

end

game = Game.new(:X, :O)

while game.board.empty_positions?

    puts
    game.board.printboard
    puts 
    position = game.current_player.get_position
    game.board.place_mark(position, game.current_player.mark_value)
    if game.board.win?(game.current_player.mark_value)
        puts "PLAYER #{game.current_player.mark_value} HAS WON!"
        return 0
    end
    game.switch_turn

end

puts "DRAW"
return 0