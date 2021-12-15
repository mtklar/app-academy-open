class Board

    attr_reader :size

    def initialize(n)
        @grid = Array.new(n) { Array.new(n, :N) }
        @size = n * n
        @n = n
    end

    def [](arr)
        row = arr[0]
        column = arr[1]
        @grid[row][column]
    end

    def []=(position, value)
        row = position[0]
        column = position[1]
        @grid[row][column] = value
    end

    def num_ships
        count = 0
        @grid.each do |row|
            row.each do |col|
                if col == :S
                    count += 1
                end
            end
        end
        count
    end

    def attack(pos)
        if self[pos] == :S
            self[pos] = :H
            puts "you sunk my battleship!"
            return true
        else
            self[pos] = :X 
            return false
        end
    end

    def place_random_ships
        ship_amount = (size * 0.25).round
        position = [rand(@n), rand(@n)]

        ship_amount.times do
            while self[position] == :S
                position = [rand(@n), rand(@n)]
            end
            self[position] = :S 
        end
    end

    def hidden_ships_grid
        # this kinda ugly though
        new_grid = @grid.map { |row| row.map do |ele|
            if ele == :S 
                :N
            else
                ele
            end
        end
        }

        new_grid
    end

    def self.print_grid(array)
        array.each do |row|
            puts row.join(" ")
        end
    end

    def cheat
        Board.print_grid(@grid)
    end

    def print
        Board.print_grid(hidden_ships_grid)
    end

end
