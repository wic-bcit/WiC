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
"""This blog post summarizes the key notes from the SAP Company Tour & Panel event held on November 13, 2024. The panel featured SAP interns and employees who shared their experiences, offering advice on navigating SAP's work culture, career growth, and skills development.💡🌟\n__Disclaimer: The following notes are paraphrased and may not be verbatim.__\
\n**Panelists**:\n\
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
        blogEntry.desc = description
        blogEntry.subtitle = "Notes from the SAP Panel Discussion"
        blogEntry.img = "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/2024%2FSAPPanel.jpg?alt=media&token=f851e7a2-a6ff-4f7f-9ef7-d76ac340c0fd"
        
        # Add questions and answers (Q: [question], [answer])
        question = "Q: Can you describe what a typical day looks like in your role?"
        answer =  """**Jaspreet:** My day involves handling customer cases, resolving issues, attending meetings, and developing internal tools for the team.\n\n\
**Victoria:** I focus on collecting and transforming customer success stories into engaging formats like slide decks, videos, and Sharpoints, while also creating and sending newsletters within the company.\n\n\
**Karleen:** My role involves three key aspects. First is __educating__ customers about our products and tailored marketing events. Second is __building relationships__ by understanding client problems. Third is __informing__, where I host demos to showcase how our products address customer needs.\n\n\
**Devan:** I collaborate with developers and designers to ensure UI consistency and create clear, user-friendly messaging. I also write and publish instructions that help users navigate product features effectively."""
        
        blogEntry.add_qa(question, answer)
        
        question1 = "Q: As new grads, how can we best adjust to SAP's work culture and balance soft and technical skills?"
        answer1 =  """\
**Christine:** To stand out as a new grad: **1) Be able to work independently and avoid negative spirals**, **2) Ask plenty of questions** to clarify tasks and vocalize your thought process as you work, and **3) Share your feedback and perspectives to your manager.**\n\
Some advice on highlighting your skills includes focusing on how you discuss your experiences, even in unrelated roles (eg. as a Safeway stocker). Emphasize transferable skills and the approaches you use to solve problems. Describe what you felt was important in your past experiences and talk about the stuff you care about. Tailor cover letters and resumes to showcase your problem-solving approach. \
For example, I had an intern who stood out by going above and beyond. They researched potential clients, created a presentation, and proposed improvements to client outreach, demonstrating proactive effort.\n\n\
**Karleen:** My advice is: talk to people to understand which roles and environments suit you best and jump into a role to start gaining experience.\n\n\
**Jaspreet:** Focus on owning projects and try to secure an internship. Internships are key in building experience. Even as you gain experience, continue learning and developing your skills.
"""
        blogEntry.add_qa(question1, answer1)
        
        question2 = "Q: As interns, what is the most important thing that has led to your success, and what makes you a successful intern?"
        answer2 =  """\
**Jaspreet:** The most important factor in my success as an intern has been **persistence**. I kept applying even after being rejected - although I wasn't hired the first time, SAP later reached out and encouraged me to apply again. SAP's positive and supportive environment also played a key role, especially the buddy system, which paired me with someone whose working style complemented mine.\n\n\
**Victoria:** My success as an intern has come from **taking initiative: identifying unmet needs and offering new ideas.** For example, I recognized the lack of videos for user stories so I proposed the idea to my manager, and implemented it company-wide. Persistence is crucial too - I applied and interviewed 3 times before securing the position.  
"""
        blogEntry.add_qa(question2, answer2)
        
        question3 = "Q: How do you think SAP's work environment supports maintaining connections with coworkers? "
        answer3 =  """\
**Christine:** SAP fosters connections through planned engagement initiatives including office events, newsletters, digital signage, holiday parties, coffee corners, and themed activities. What's key is __connecting with a purpose__, which is why the company organizes peer-led luncheons where employees take turns presenting topics while bonding during lunch. In addition, Corporate Social Responsibility (CSR) initiatives connect SAP employees with nonprofits focused on issues like food insecurity and Indigenous support. Employees are encouraged to volunteer at least 8 hours annually.\n\n\
**Devan:** SAP supports both formal and informal connections. I participate in corporate events like employee network groups, but I also prioritize informal interactions like coffee chats and casual lunches with my team, where we often talk about things that aren't work related.\n\n\
**Karleen:** Since I work remotely with a team of 13 spread across Canada, I rely on virtual communication to maintain connections. Staying connected requires personal responsibility, and I make an effort to build and sustain those relationships online.
"""
        blogEntry.add_qa(question3, answer3)
        
        question4 = "Q: How has SAP helped you grow and develop your skills?"
        answer4 =  """\
**Jaspreet:** SAP has helped me grow by providing lots of opportunities to grow as a person. For instance, I get nervous about public speaking, but just today I was invited to speak for this panel, which helped me step out of my comfort zone! I've also had the chance to speak with high-level leaders in SAP, like Christine, which enhanced my confidence. Attending work events has helped me develop valuable soft skills. I've learned that openly communicating with my manager about my growth goals allows them to offer support and guidance.\n\n\
**Victoria:** I've honed my existing skills at SAP and learned to apply them in new and unexpected ways. I realized that many of my skills are transferable across roles, and I've gained proficiency in new SAP tools and terminology.\n\n\
**Karleen:** I've leveraged SAP SuccessFactors, the company's internal learning platform, to find resources for self-development.\n\n\
**Christine:** During a team split, I took the initiative to express interest in leading a sub-team, even though my manager hadn't considered me for the role. This experience taught me that **development is self-driven**, and by communicating with your manager about your interests and growth goals, you can create valuable opportunities for yourself.
"""
        blogEntry.add_qa(question4, answer4)
        
        question5 = "Q: What were the hardest challenges you faced in your role, and how did you overcome them?"
        answer5 =  """\
**Devan:** One of my hardest challenges was being the lone technical writer in a previous role, where developers were already managing documentation. As a technical writer, it was my responsibility to handle this documentation and it was difficult to establish my role and integrate into the team. I overcame this by asserting my presence, speaking up to ensure I was informed with new tasks. Advocating for yourself helps you succeed.\n\n\
**Karleen:** Managing stress from meeting quotas was one of my biggest challenges. It was stressful to see that my efforts directly impacted the outcomes - the harder I worked, the better the results. However, balancing my workload while maintaining mental health is equally important. I overcame this by taking ownership of my calendar since I get to plan my own work day, prioritize balance, and keep tabs on my own mental well-being.\n\n\
**Victoria:** I faced creative blocks while working on slide decks and SharePoints. To overcome this, I took breaks and realized that I didn't need to reinvent the wheel - I could seek inspiration from other materials. Engaging with my team, asking them questions, and using their support also helped in finding solutions.\n\n\
**Jaspreet:** Initially, I was afraid to ask questions and thought that it would make me seem inexperienced. However, I realized that full-timers often don't have all the answers either but they just weren't afraid to ask. This understanding helped me start asking more questions during meetings, which improved my clarity and confidence.\n\n\
**Christine:** A challenge for me was comparing myself to others who seemed to present effortlessly. I overcame this by recognizing that confident presenters spend hours practicing, it isn't just natural talent. Continuous practice has been key to building my confidence. 
"""
        blogEntry.add_qa(question5, answer5)
        
        question6 = "Q: Is there a culture in learning from mistakes at SAP?"
        answer6 =  """\
**Christine:** From an operations perspective, programs like SHRED, a government grant, financially incentives ideas that push boundaries despite the risk of failure. Developers are motivated to deeply understand customer pain points and explore creative solutions, recognizing that sometimes failure leads to the best solutions. For example, an intern accidentally deleted an entire tool and thought they'd be fired. However, instead of being reprimanded, the team simply rolled back the changes and focused on improving the process by asking __"how did this happen and how can we prevent it from happening again?"__\n\n\
**Karleen:** Failure is a team experience, not an individual one. SAP fosters a supportive environment where there's lots of grace and your team helps each other through mistakes. There's also opportunities to switch roles, allowing employees to grow and learn from different perspectives.\n\n
**Jaspreet:** Even when mistakes are made in production, responsibility is shared across the team. Things are checked and tested by everyone. 
"""
        blogEntry.add_qa(question6, answer6)
        
        question7 = "Q: Jaspreet, what BCIT courses helped you get into DevOps?"
        answer7 =  """\
**Jaspreet:** No specific courses directly led me to my DevOps role, but I focused on learning technologies that I was passionate about. I regularly reviewed job postings to identify skills in demand and chose my courses based on that. BCIT's programming courses were really valuable for practical, real-world application. I also found that **soft skills - like customer service experience, were important to highlight on my resume**, even when applying for technical roles. While I took courses like Java, I focused more on developing problem-solving techniques rather than learning specific languages. I also recommend practicing problem-solving on LeetCode. 
"""
        blogEntry.add_qa(question7, answer7)
        
        question8 = "Q: If you got promoted to another role, is there an internal job board or do you have to pursue them yourself through networking?"
        answer8 =  """\
**Karleen:** Yes to both questions. SAP has an internal job board where roles are posted but it's often known within the team/company who might be moving into a particular position. Internal networking is very important for career advancement.
"""
        blogEntry.add_qa(question8, answer8)
        
        question9 = "Q: What made you decide to work as a software developer or in DevOps?"
        answer9 =  """\
**Jaspreet:** I wanted to experience different types of roles, in order to engage in conversations with many different people.\n\n\
**Christine:** Managers often nominate their interns internally for roles, which can provide an opportunity to transition into positions like software development or DevOps.
"""
        blogEntry.add_qa(question9, answer9)
        
        question10 = "Q: How can students show experience and learn AI?"
        answer10 =  """\
**Christine:** Practice prompt engineer and showcase examples of how you've worked with AI. At SAP, teams work on AI models to provide solutions tailored to users' needs.\n\n\
**Karleen:** AI is integrated into every product at SAP, it is an essential area of focus for anyone in the company, even in my role in Sales.
"""
        blogEntry.add_qa(question10, answer10)
        
        question11 = "Q: From student to SAP intern, share experience with the transition. Was it daunting knowing there was a lot to learn?"
        answer11 =  """\
**Victoria:** I worked at a part-time job at UBC which helped me gain skills that were transferable to a larger company like SAP. The onboarding process was really helpful - SAP's three-day onboarding program gave me a detailed overview of the company, and I got to meet other new employees from all over the world. I also made an effort to connect with my team to understand their roles and how I would be working with them. SAP's __buddy system__ was a huge support - I met with my buddy weekly to ask questions which gave a mentorship relationship and guidance. While the transition was daunting, there were so many support systems in place that made it easier to learn and adapt.
"""
        blogEntry.add_qa(question11, answer11)
        
        question12 = "Q: Does SAP incentivize external learning if an employee wants to further their skills? What is the Catalyst learning program?"
        answer12 =  """\
**Karleen:** The __Catalyst program__ provides access to advanced learning courses and networking opportunities.\n\n\
**Christine:** With manager approval employees can receive tuition reimbursement to pursue further education. In addition, SAP offers a **social sabbatical** where employees can take  three months off to live and work abroad, contributing to  a nonprofit while improving business outcomes. SAP funds the living expenses during this time, and employees gain new skills outside their usual area of expertise. Beyond formal education, employees can apply for fellowships and team rotations to work with different teams.
"""
        blogEntry.add_qa(question12, answer12)
        
        question13 = "Q: How has your career journey unfolded, and how did you end up at SAP?"
        answer13 =  """\
**Christine:** Initially, I was an English major planning to become a high school English teacher. During an internship, I transitioned into tech writing and I developed a passion for the tech industry. My career has been shaped by saying 'yes' to new opportunities. I am passionate about story-telling and I've found that my ability to tell a compelling story in a technical context has been valuable in my role as COO at SAP.\n\n\
**Devan:** I graduated with an Arts degree with a minor in math. I was unsure of what to do after university and I worked at several customer service roles. I knew that I enjoyed writing so I took technical writing courses at SFU and earned a technical writing certificate, which led to my first job in the field. Overtime, I took more courses and gained more experience with different companies before eventually joining SAP. **Being laid off from jobs means it's an opportunity to grow and learn!**\n\n\
**Karleen:** I was initially passionate about CSI and criminology, so I studied criminology at SFU. However, I soon realized that Canada lacked CSI job opportunities and I didn't quite fit the personality required for roles like being a cop or corrections officer. I decided to pivot and pursued a Graduate Diploma in Business Administration (GDBA) at SFU. I started in tech support, and when the only salesperson left the company, I was encouraged to take on sales. I quickly excelled in this role and discovered my talent for sales and interacting with people, which led me to SAP.
"""
        blogEntry.add_qa(question13, answer13)
        
        
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
    # blogEntry = fb.set_entry_info()
    # fb.add_blog_entry(blogEntry)
    
    
    
    ######################### vvv not used in site currently
    # ADD NEW EXECE MEMBERS: Uncomment and modify set_exec_info() 
    # exec = fb.set_exec_info()
    # fb.add_exec(exec)
    
    
    # ADD NEW SEM EXEC TEAM: Uncomment and modify set_team_info() 
    # team = fb.set_team_info()
    # fb.add_team(team)
    