require "employee"

class Startup

    attr_reader :name, :funding, :salaries, :employees

    def initialize(name, funding, salaries)
        @name = name
        @funding = funding
        @salaries = salaries
        @employees = []
    end

    def valid_title?(title)
        @salaries.key?(title)
    end

    def >(startup)
        if self.funding > startup.funding
            return true
        else
            return false
        end
    end

    def hire(employee_name, title)
        if self.valid_title?(title)
            employees << Employee.new(employee_name, title)
        else
            raise "Not a valid title"
        end
    end

    def size
        @employees.length
    end

    def pay_employee(employee)
        pay_amount = @salaries[employee.title]
        if @funding > pay_amount
            employee.pay(pay_amount)
            @funding -= pay_amount
        else
            raise "not enough money"
        end
    end

    def payday
        @employees.each do |ele|
            pay_employee(ele)
        end
    end

    def average_salary
        salaries_total = []

        @employees.each do |ele|
            salaries_total << @salaries[ele.title]
        end

        salaries_total.sum / salaries_total.length
    end

    def close
        @employees = []
        @funding = 0
    end

    def acquire(other_startup)
        @funding += other_startup.funding
        # This feels like a messy way to do this and I couldn't figure out a lower
        # level way to do it
        @salaries = other_startup.salaries.merge(@salaries)
        other_startup.employees.each { |ele| @employees << ele }
        other_startup.close
    end

end
