require_relative "list.rb"

class Todoboard

    def initialize(label)
        @list = List.new(label)
    end

    def get_command
        print "\n Enter a command: "
        cmd, *args = gets.chomp.split

        case cmd
        when "mktodo"
            @list.add_item(*args)
        when "up"
            @list.up(*args[0].to_i)
        when "down"
            @list.down(*args[0].to_i)
        when "sort"
            @list.sort_by_date!
        when "priority"
            @list.print_priority
        when "print"
            if args.length == 0
                @list.print
            elsif args.length == 1
                @list.print_full_item(*args[0].to_i)
            end
        when "quit"
            return false
        else 
            print "Sorry, that command is not recognized"
        end
        
        return true
    end

    def run 
        bool = true
        while bool
            bool = get_command
            
        end
    end

end

my_board = Todoboard.new('groceries')

my_board.run