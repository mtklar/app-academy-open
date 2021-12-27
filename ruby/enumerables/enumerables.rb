class Array

    def my_each(&prc)
        i = 0
        while i < self.length 
            prc.call(self[i])
            i += 1
        end
        self
    end

    def my_select(&prc)
        new_array = []

        self.my_each do |item|
            if prc.call(item)
                new_array << item
            end
        end

        new_array
    end

    def my_reject(&prc)
        new_array = []

        self.my_each do |item|
            if !prc.call(item)
                new_array << item
            end
        end

        new_array
    end

    def my_any?(&prc)
        self.my_each do |item|
            return true if prc.call(item)
        end
        return false
    end

    def my_all?(&prc)
        self.my_each do |item|
            return false if !prc.call(item)
        end
        return true
    end

    def my_flatten
        # recursion too hard
    end

    def my_zip(*args)
        args.unshift(self)
        new_array = Array.new(self.length) { Array.new(args.length, nil) }

        (0...self.length).each do |i|
            (0...args.length).each do |j|
                new_array[i][j] = args[j][i]
            end
        end

        new_array
    end

    def my_rotate(num=1)
        new_array = self.clone

        if num > 0
            num.times do 
                shifted = new_array.shift
                new_array << shifted
            end
        else
            num *= -1
            num.times do
                popped = new_array.pop
                new_array.unshift(popped)
            end
        end

        new_array
    end

    def my_join(seperator="")
        string = ""

        (0...self.length - 1).each do |i|
            string += self[i] + seperator
        end
        string += self[-1]

        string
    end

    def my_reverse
        new_array = []

        i = self.length - 1
        while i >= 0
            new_array << self[i]
            i -= 1
        end

        new_array
    end

end


p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
p [ 1 ].my_reverse               #=> [1]