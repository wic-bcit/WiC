import datetime
import time
from pytz import timezone
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from fb_classes import Event, Exec, Team

class Firebase:
    def __init__(self):
        cred = credentials.Certificate('./wicwebsite.json')
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()
    
    def add_exec(self, student:Exec):
        custom_id = (student.name).lower().replace(' ','_')
        self.db.collection(u'execs').document(custom_id).set({
            u'name':student.name,
            u'program': student.program,
            u'img': student.img
        })

    def add_team(self, team:Team):
        custom_id = str(team.year) + "_" + team.sem
        self.db.collection(u'team').document(custom_id).set({
            u'start':team.start,
            u'end': team.end,
            u'execs': team.execs
        })

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
   
    def set_event_info(self):
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
        event.register = ""
        
        # uncomment if additional links needed
        # event.links.append({"name":"", "url":""})
        
        # year, month, day
        event.date = datetime.datetime(2022, 5, 1).astimezone(timezone('US/Pacific'))
        event.time = ""
        event.venue = ""
        
        return event
        
    def set_exec_info(self):
        # Add Event
        exec = Exec()
        exec.name = ""
        exec.program = ""
        exec.img = ""
        return exec
    
    def set_team_info(self):
        # Add Event
        team = Team(isFall=False, year=2019)
        ref  = self.db.collection('execs')
        
        # {"role":exec reference}
        # team.execs.append({"president":ref.document('name')})
        # team.execs.append({"vp"       :ref.document('name')})
        # team.execs.append({"treasurer":ref.document('name')})
        team.execs.append({"executive":ref.document('nicole_jingco')})
        team.execs.append({"executive":ref.document('mikhaela_layon')})
        return team
    
    

if __name__ == "__main__":
    fb = Firebase()
    
    # ADD NEW EVENTS: Uncomment and modify set_event_info() 
    # event = fb.set_event_info()
    # fb.add_event(event)

    # ADD NEW EXECE MEMBERS: Uncomment and modify set_exec_info() 
    # exec = fb.set_exec_info()
    # fb.add_exec(exec)
    
    
    # ADD NEW SEM EXEC TEAM: Uncomment and modify set_team_info() 
    team = fb.set_team_info()
    fb.add_team(team)
    