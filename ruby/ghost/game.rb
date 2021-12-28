require 'set'
require_relative 'player.rb'

class Game

    attr_reader :dictionary

    def initialize
        @fragment = ""
        @players = []
        @dictionary = Set.new()
        File.foreach("dictionary.txt") do |line|
            @dictionary << line.chomp
        end
        @currentPlayer
        @previousPlayer
    end

    def getPlayers
        puts "How many people will be playing?"
        amount = gets.chomp.to_i
        puts
        (1..amount).each do |i|
            puts "Please enter the name of player #{i}"
            playerName = gets.chomp
            @players << Player.new(playerName)
            puts
        end
        @currentPlayer = @players[0]
    end

    def validPlay?(string)
        @dictionary.any? { |word| word.include?(string) }
    end

    def currentPlayer
        @currentPlayer
    end

    def previousPlayer
        @previousPlayer
    end

    def nextPlayer!
        playerIndex = @players.find_index(@currentPlayer)
        @currentPlayer = @players[(playerIndex + 1) % @players.length]
        @previousPlayer = @players[playerIndex]
    end

    def playRound
        puts "#{@currentPlayer.name} enter a letter to extend the word:"
        response = gets.chomp
        while !validPlay?(@fragment + response)
            puts "Your letter didn't create a valid word, try again: "
            response = gets.chomp
        end
        puts 
        @fragment += response
        puts "Current word fragment is: #{@fragment}"
        if @dictionary.include?(@fragment)
            puts "#{@currentPlayer.name} you created a real word and you lose!"
            @fragment = ""
        end
        nextPlayer!
    end

end


g = Game.new
g.getPlayers

g.playRound
g.playRound
g.playRound
g.playRound
g.playRound
g.playRound
g.playRound
