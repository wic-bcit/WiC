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
"""I hope your midterms were a success for those who finished, and best of luck to everyone still taking them!\n\n\
Take a breather and join us for an exciting tour of SAP's facilities. After the tour, you'll have a chance to participate in a fireside chat with SAP's COO. This is a fantastic opportunity to learn more about SAP, its vibrant culture, and to network with others!\n\
Note: You will be placed on the waitlist when all seats are filled.
""")
        
        # Add Event 
        event = Event()
        event.title = "SAP Company Tour and Panel"
        event.desc = description.replace("\n", "/n")
        
        event.img = "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/2024%2Fsap.png?alt=media&token=118f8bda-0241-4ebc-b317-e3df3cd9dbbb"
        event.is_active = True
        event.register = "https://docs.google.com/forms/d/e/1FAIpQLSd7Vq_NZmV7ol84gRlfi9-l78LTG9cg4lh0KAv2g6m5QzJQGA/viewform"
        
        # uncomment if additional links needed
        # event.links.append({"name":"", "url":""})
        
        # year, month, day
        event.date = datetime.datetime(2024, 11, 13).astimezone(timezone('US/Pacific'))
        event.time = "3:00-5:00 pm"
        event.venue = "SAP Vancouver"
        
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
"""This blog post summarizes the key insights from the SAP Company Tour & Panel event held on November 13, 2024. The panel featured SAP interns and employees who shared their experiences, offering advice on navigating SAP's work culture, career growth, and skills development.💡🌟\nDisclaimer: The following notes are paraphrased and may not be verbatim.\
\n\nPanelists:\n\
- Christine Vukusic (COO)\n\
- Jaspreet Sidhu (Support Engineer Intern, prev. Cloud DevOps Engineer Intern)\n\
- Victoria Lim (Digital Content Intern)\n\
- Karleen Murphy (Enterprise Account Executive - SAP SuccessFactors)\n\
- Devan Gee (Senior User Assistance Developer)\n\n\
A special thank you to the panelists for sharing their valuable insight and experiences, and to everyone at SAP who made this event possible!👏
""")
        
        
        # Add new blog entry 
        blogEntry = BlogEntry()
        blogEntry.title = "SAP Panel 2024: Insights and Career Tips"
        blogEntry.subtitle = "Key Takeaways from the SAP Panel Discussion"
        blogEntry.img = "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/2024%2FSAPPanel.jpg?alt=media&token=f851e7a2-a6ff-4f7f-9ef7-d76ac340c0fd"
        
        # Add questions and answers (Q: [question], [answer])
        question = "Q: Can you describe what a typical day looks like in your role?"
        answer =  """**Jaspreet:** My day involves handling customer cases, resolving issues, attending meetings, and developing internal tools for the team.\n\n\
**Victoria:** I focus on collecting and transforming customer success stories into engaging formats like slide decks, videos, and Sharpoints, while also creating and sending newsletters within the company.\n\n\
Karleen: My role involves three key aspects. First is educating customers about our products and tailored marketing events. Second is building relationships by understanding client problems. Third is informing, where I host demos to showcase how our products address customer needs.\n\n\
Devan: I collaborate with developers and designers to ensure UI consistency and create clear, user-friendly messaging. I also write and publish instructions that help users navigate product features effectively."""
        
        blogEntry.add_qa(question, answer)
        
        # uncomment if additional links needed
        # blogEntry.links.append({"name":"", "url":""})
        
        # year, month, day
        blogEntry.date = datetime.datetime(2024, 11, 26).astimezone(timezone('US/Pacific'))
        
        return blogEntry
    

if __name__ == "__main__":
    fb = Firebase()
    
    # ADD NEW EVENTS: Uncomment and modify set_event_info() 
    # event = fb.set_event_info()
    # fb.add_event(event)

    # ADD NEW BLOG ENTRY: Uncomment and modify set_entry_info() 
    blogEntry = fb.set_entry_info()
    fb.add_blog_entry(blogEntry)
    
    
    
    ######################### vvv not used in site currently
    # ADD NEW EXECE MEMBERS: Uncomment and modify set_exec_info() 
    # exec = fb.set_exec_info()
    # fb.add_exec(exec)
    
    
    # ADD NEW SEM EXEC TEAM: Uncomment and modify set_team_info() 
    # team = fb.set_team_info()
    # fb.add_team(team)
    