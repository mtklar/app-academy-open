require_relative "item.rb"

class List

    attr_accessor :label

    def initialize(label)
        @label = label
        @items = []
    end

    def add_item(title, deadline, description="")
        if !Item.valid_date?(deadline)
            return false
        end

        @items << Item.new(title, deadline, description)
        return true
    end

    def size
        return @items.length
    end

    def valid_index?(index)
        if index < 0 || index > @items.length - 1
            return false
        else
            return true
        end
    end

    def [](index)
        if !valid_index?(index)
            return nil
        else
            return @items[index]
        end
    end

    def priority
        return @items[0]
    end

    def swap(index_1, index_2)
        if !valid_index?(index_1) || !valid_index?(index_2)
            return false
        end

        @items[index_1], @items[index_2] = @items[index_2], @items[index_1]
    end

    def print
        puts "".ljust(55, "-")
        puts @label.upcase.ljust(55)
        puts "".ljust(55, "-")
        puts "Index".ljust(10) + " | " + "Item".ljust(27) + " | " + "Deadline".ljust(7)
        puts "".ljust(55, "-")
        @items.each.with_index do |item, i|
        puts i.to_s.ljust(10) + " | " + item.title.ljust(27) + " | " + item.deadline.ljust(7)
        end
        puts "".ljust(55, "-")
    end

    def print_full_item(index)
        if !valid_index?(index)
            return false
        end

        puts "".ljust(55, "-")
        puts @items[index].title.upcase + "".ljust(43 - @items[index].title.length) + @items[index].deadline
        if @items[index].description == ""
            puts "No description"
        else
            puts @items[index].description
        end
        puts "".ljust(55, "-")
    end

    def print_priority
        print_full_item(0)
    end 

    def up(index, amount=1)
        if !valid_index?(index)
            raise "Invalid index"
            return false
        end
        
        (0...amount).each do |i|
            if index > 0
            @items[index], @items[index - 1] = @items[index - 1], @items[index]
            index -= 1
            end
        end
    end

    def down(index, amount=1)
        if !valid_index?(index)
            raise "Invalid index"
            return false
        end
        
        (0...amount).each do |i|
            if index < @items.length - 1
            @items[index], @items[index + 1] = @items[index + 1], @items[index]
            index += 1
            end
        end
    end

    def sort_by_date!
        @items.sort_by! { |item| item.deadline }
    end

end
