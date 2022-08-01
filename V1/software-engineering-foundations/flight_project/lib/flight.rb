class Flight 

    attr_reader :passengers

    def initialize(flight_number, capacity)
        @flight_number = flight_number
        @capacity = capacity
        @passengers = []
    end

    def full?
        if @passengers.length >= @capacity
            return true
        else
            return false
        end
    end

    def board_passenger(passenger)
        if !self.full?
            if passenger.has_flight?(@flight_number)
                @passengers << passenger
            end
        end
    end

    def list_passengers
        @passengers.map(&:name)
    end

    def [](i)
        @passengers[i]
    end

    def <<(passenger)
        self.board_passenger(passenger)
    end

end