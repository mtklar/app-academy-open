class Item

    attr_accessor :title, :description

    def initialize(title, deadline, description)
        @title = title
        if Item.valid_date?(deadline)
            @deadline = deadline
        else
            raise "Date is not valid"
        end
        @description = description
    end

    def deadline
        @deadline
    end

    def deadline=(dl)
        if Item.valid_date?(dl)
            @deadline = dl
        else
            raise "Date is not valid"
        end
    end

    def self.valid_date?(date_string)
        split = date_string.split("-")
        
        if split[1].to_i < 1 || split[1].to_i > 12
            return false
        elsif
            split[2].to_i < 1 || split[2].to_i > 31
            return false
        else
            return true
        end
    end


end


Item.new(
    'Fix checkout page',
    '10-25-2019',
    'The font is too small.'
) # raises error due to invalid date
