require_relative "room"

class Hotel
  
    def initialize(str, hash)
        @name = str
        @rooms = Hash.new(0)
        hash.each do |k, v|
            @rooms[k] = Room.new(v)
        end
    end

    def name 
        new_name_array = @name.split
        new_name_array.each do |ele|
            ele.capitalize!
        end
        new_name_array.join(" ")
    end

    def rooms
        @rooms 
    end

    def room_exists?(str)
        if @rooms.key?(str)
            return true
        else
            return false
        end
    end

    def check_in(person, room_name)   
        if !room_exists?(room_name)
            puts "sorry, room does not exist"
        elsif @rooms[room_name].add_occupant(person)
            puts "check in successful"
        else
            puts"sorry, room is full"
        end
    end

    def has_vacancy?
        full_rooms = 0
        @rooms.each do |k,v|
            if @rooms[k].full?
                full_rooms += 1
            end
        end
        if full_rooms == @rooms.length
            return false
        else
            return true
        end
    end

    def list_rooms
        @rooms.each do |k,v|
            puts k + ": " + @rooms[k].available_space.to_s
        end
    end

end
