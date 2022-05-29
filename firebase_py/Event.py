
import datetime
import string

class Event:
    # def __init__(self, title:string, desc:string, img:string, is_active:bool, register:string, date:datetime, time:string, venue:string ):
    def __init__(self):
        self.title=""
        self.desc=""
        self.img=""
        self.is_active=False
        self.links=[]
        self.register=""
        self.date=datetime.datetime(2022, 1, 1)  # year, month, day
        self.time = ""
        self.venue=""
      