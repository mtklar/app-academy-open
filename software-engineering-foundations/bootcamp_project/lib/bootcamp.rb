class Bootcamp
    def initialize(name, slogan, student_capacity)
        @name = name
        @slogan = slogan
        @student_capacity = student_capacity
        @teachers = []
        @students = []
        @grades = Hash.new { |hash, k| hash[k] = [] }
    end

    def name 
        @name
    end

    def slogan
        @slogan
    end

    def teachers
        @teachers
    end

    def students
        @students
    end

    def hire(str)
        @teachers << str
    end
    
    def enroll(str)
        if @students.length < @student_capacity
            @students << str
            return true
        else
            return false
        end
    end

    def enrolled?(str)
        @students.include?(str)
    end

    def student_to_teacher_ratio
        return ((@students.length * 1.0) / (@teachers.length * 1.0)).to_i
    end

    def add_grade(str, num)
        if enrolled?(str)
            @grades[str] << num
            return true
        else
            return false
        end
    end

    def num_grades(str)
        @grades[str].length
    end

    def average_grade(str)
        if enrolled?(str) && @grades[str].length != 0 
            ((@grades[str].sum * 1.0) / (@grades[str].length * 1.0)).to_i
        else
            return nil
        end
    end
  
end
