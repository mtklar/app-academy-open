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

    def guess
        puts "#{@currentPlayer.name} enter a letter to extend the word:"
        response = gets.chomp
        while !validPlay?(@fragment + response)
            puts
            puts "Your letter didn't create a valid word, try again: "
            response = gets.chomp
        end
        puts
        return response
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

    def printPoints
        puts "".ljust(20, "-")
        puts "Current Standings:"
        standings = @players.clone
        standings.sort_by { |player| player.losses}
        standings.each do |player|
            puts "#{player.name}: #{player.printGhost}"
        end 
        puts "".ljust(20, "-")
    end 

    def playRound
        @fragment += guess
        puts "Current word fragment is: #{@fragment.capitalize}"
        if @dictionary.include?(@fragment)
            puts "#{@currentPlayer.name} you created a full word and you lose 1 point!"
            @currentPlayer.addLossPoint
            if @currentPlayer.lost?
                puts "#{@currentPlayer.name} you are a GHOST! And have been eliminated."
                @players.delete(@currentPlayer)
            end
            puts
            printPoints
            @fragment = ""
            return true
        end
        nextPlayer!
        return false
    end

    def run
        self.getPlayers
        while @players.length > 1
            self.playRound
        end
        puts
        puts "#{@players[0]} CONGRATULATIONS, YOU WON!"
    end

end


g = Game.new
g.run
