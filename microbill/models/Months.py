from enum import Enum

class Months(Enum):
    January = 1
    February = 2
    March = 3
    April = 4
    May = 5
    June = 6
    July = 7
    August = 8
    September = 9
    October = 10
    November = 11
    December = 12

    @classmethod
    def has_key(cls, name):
        return name in cls.__members__ 
    
    @classmethod
    def has_key(cls, id):
        return id in cls._value2member_map_
        
