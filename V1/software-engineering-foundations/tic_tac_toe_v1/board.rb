class Board

    def initialize
        @grid = Array.new(3, "_") { Array.new(3, "_") }
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
            print " | "
            row.each do |col|
                print col
                print " | "
            end
            print "\n"
        end
    end

    def win_row?(mark)
        @grid.each do |row|
            if row.all? { |col| col == mark }
                return true
            end
        end
        return false
    end

    def win_col?(mark)
        temp_grid = @grid.clone.transpose
        temp_grid.each do |row|
            if row.all? { |col| col == mark }
                return true
            end
        end
        return false
    end

    def win_diagonal?(mark)
        new_array = []
        new_array2 = []
        
        (0...@grid.length).each do |i|
            new_array << @grid[i][i]
            new_array2 << @grid[i][(@grid.length - 1) - i]
        end

        if (new_array.all? { |ele| ele == mark }) || (new_array2.all? { |ele| ele == mark })
            return true
        else
            return false
        end
    end

    def win?(mark)
        if win_row?(mark) || win_col?(mark) || win_diagonal?(mark)
            return true
        else
            return false
        end
    end

    def empty_positions?
        @grid.each do |row|
            if row.any? { |ele| ele == "_"}
            return true
        end
        end
        return false
    end
end