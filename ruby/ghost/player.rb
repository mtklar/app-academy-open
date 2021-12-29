class Player 

    attr_reader :name, :losses

    def initialize(name)
        @name = name
        @losses = 0
        @ghost = ["G", "H", "O", "S", "T"]

    end

    def lost?
        if @losses == 5
            return true
        else
            return false
        end
    end

    def addLossPoint
        @losses += 1
    end

    def printGhost
        newString = ""
        (0...@losses).each do |i|
            newString += @ghost[i]
        end
        newString
    end

end
