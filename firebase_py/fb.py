import datetime
import time
from pytz import timezone
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from fb_classes import Event, Exec, Team, BlogEntry

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
"""✨Join us for an exciting and insightful evening with Shamez Meghji, a Software Development Engineer at Amazon in Vancouver! \
    On Wednesday, October 2nd, 2024, Shamez will be visiting BCIT's Downtown Campus to share his experiences working at Amazon, offering a unique perspective on life as an SDE at one of the world’s leading tech companies. \
    This is a fantastic opportunity for anyone interested in tech, software development, or the inner workings of Amazon. ☁️
""")
        
        # Add Event 
        event = Event()
        event.title = "Talk with Shamez"
        event.desc = description.replace("\n", "/n")
        
        event.img = "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/2024%2FshamezTalk.png?alt=media&token=63b31054-ce25-4a7b-8d14-d50554acd99c"
        event.is_active = True
        event.register = ""
        
        # uncomment if additional links needed
        # event.links.append({"name":"", "url":""})
        
        # year, month, day
        event.date = datetime.datetime(2024, 10, 2).astimezone(timezone('US/Pacific'))
        event.time = "5:00-7:00 pm"
        event.venue = "BCIT Downtown, Room 552"
        
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
    
    
    # below are 2 blog functions
    def add_blog_entry(self, blogEntry: BlogEntry):
        self.db.collection(u'blog').add({
            # String - Blog entry title
            u'title': blogEntry.title,
            
            # String - Blog entry subtitle
            u'subtitle': blogEntry.subtitle,
            
            # String - short blog entry Description (Add "/n" to add new line for formatting)
            u'description': blogEntry.desc,
            
            # String - url link of image (found in Firebase storage)
            u'img': blogEntry.img,
            
            # Array of Maps - additional links
            u'links': blogEntry.links,
            
            # Timestamp - date of blog entry submission 
            u'date':  blogEntry.date,
            
            # Array of Maps - main body Q&A
            u'qa': blogEntry.qa
            
            }
        )
    
    
    def set_entry_info(self):
        description = (
"""
""")
        
        
        # Add new blog entry 
        blogEntry = BlogEntry()
        blogEntry.title = ""
        blogEntry.subtitle = ""
        blogEntry.desc = description.replace("\n", "/n")
        blogEntry.img = ""
        
        # Add questions and answers (Q: [question], [answer])
        blogEntry.add_qa("Q: ","")
        
        # uncomment if additional links needed
        blogEntry.links.append({"name":"", "url":""})
        
        # year, month, day
        blogEntry.date = datetime.datetime(2024, 10, 8).astimezone(timezone('US/Pacific'))
        
        return blogEntry
    

if __name__ == "__main__":
    fb = Firebase()
    
    # ADD NEW EVENTS: Uncomment and modify set_event_info() 
    # event = fb.set_event_info()
    # fb.add_event(event)

    # ADD NEW BLOG ENTRY: Uncomment and modify set_entry_info() 
    # blogEntry = fb.set_entry_info()
    # fb.add_blog_entry(blogEntry)
    
    
    
    #########################
    # ADD NEW EXECE MEMBERS: Uncomment and modify set_exec_info() 
    # exec = fb.set_exec_info()
    # fb.add_exec(exec)
    
    
    # ADD NEW SEM EXEC TEAM: Uncomment and modify set_team_info() 
    # team = fb.set_team_info()
    # fb.add_team(team)
    