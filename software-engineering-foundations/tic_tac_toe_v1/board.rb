class Board

    def initialize
        @grid = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]]
    end

    def valid?(position)
        pos1 = position[0]
        pos2 = position[1]
        size = @grid.length - 1

        if pos1 >= 0 && pos1 <= size && pos2 >= 0 && pos2 <= size
            return true
        else 
            return false
        end
    end

    def empty?(position)
        if @grid[position[0]][position[1]] == "_"
            return true
        else
            return false
        end
    end

    def place_mark(position, mark)
        if !valid?(position)
            raise "Invalid Position"
        elsif !empty?(position)
            raise "That position has been taken already"
        else
            @grid[position[0]][position[1]] = mark
        end
    end

    def printboard
        @grid.each do |row|
            print row, "\n"
        end
    end
end