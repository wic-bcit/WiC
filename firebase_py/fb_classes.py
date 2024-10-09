
import datetime
import string
from pytz import timezone


class Exec:
     def __init__(self):
        self.name=""
        self.program=""
        self.img="" 

class Team:
    def __init__(self, year, isFall):
        self.year = year
        self.sem =  "fall" if isFall else "winter" 
        
        if isFall:
            # Fall  
            self.start=datetime.datetime(year, 9, 1).astimezone(timezone('US/Pacific'))
            self.end=datetime.datetime(year, 12, 31).astimezone(timezone('US/Pacific'))
        else:
            # Winter
            self.start=datetime.datetime(year, 1, 1).astimezone(timezone('US/Pacific'))
            self.end=datetime.datetime(year, 5, 31).astimezone(timezone('US/Pacific'))
            
        self.execs=[]
        
        
        
        
        

class Event:
    # def __init__(self, title:string, desc:string, img:string, is_active:bool, register:string, date:datetime, time:string, venue:string ):
    def __init__(self):
        self.title=""
        self.desc=""
        self.img=""
        self.is_active=False
        self.links=[]
        self.register="#"
        self.date=datetime.datetime(2022, 1, 1).astimezone(timezone('US/Pacific'))  # year, month, day
        self.time = ""
        self.venue=""
        
class BlogEntry:
    def __init__(self):
        self.title=""
        self.subtitle=""
        self.desc=""
        self.img=""
        self.links=[]
        self.date=datetime.datetime(2022, 1, 1).astimezone(timezone('US/Pacific'))  # year, month, day
        self.qa=[]
        
    def add_qa(self, question: str, answer: str):
        self.qa.append({"question": question, "answer": answer})