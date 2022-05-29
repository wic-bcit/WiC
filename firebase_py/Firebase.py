import datetime
import time
from pytz import timezone
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from Event import Event

class Firebase:
    def __init__(self):
        cred = credentials.Certificate('./wicwebsite.json')
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()

    # See README file for more info
    def add_event(self, event:Event):
        self.db.collection(u'events').add({
            # String - Event name
            u'title': event.title,
            
            # String - Event Description (Add "/n" to add new line for formatting)
            u'description': event.desc,
            
            # String - url link of poster (found in Firebase storage)
            u'img':event.img,
            
            # Booleon - is event still taking in registrations
            u'isActive': event.is_active,
            
            # Array of Maps - additional links
            u'links': event.links,
            
            # String - registration form url
            u'register': event.register,
            
            # Timestamp - DATE of event
            u'date':  event.date,
            
            # String - time duration of event
            u'time': event.time,
            
            # String - location of event
            u'venue': event.venue,
            }
        )


if __name__ == "__main__":
    
    description = (
"""
Add description here
""")
    
    # Add Event
    event = Event()
    event.title = ""
    event.desc = description.replace("\n", "/n")
    
    event.img = ""
    event.is_active = False
    event.links.append({"name":"", "url":""})
    event.register = "#"
    # year, month, day
    event.date = datetime.datetime(2022, 5, 1).astimezone(timezone('US/Pacific'))
    event.time = ""
    event.venue = ""
    
    fb = Firebase()
    fb.add_event(event)
    