import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';
import AppContent from '../components/common/app-content';
 
const AngularApp = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

	return(
		<Layout>
		  <div className={`col-xxl-10 col-xl-9 content component-col ${fontSizeLocal}`}>
	        <div id="section-1">
	          <div className="card">
	          	<h4 className="main-title mb-0">Application</h4>
	            <hr className="hr" />
	            <div id="section-1-1">
	              <AppContent 
	                title="E-commerce"
	                image="../assets/images/apps/ecommerce.gif"
	                content="You can directly use complete E-commerce app to manage your E-commerce with readymade functionality of Add to cart,Quickview, and Checkout with Stripe as well as Paypal. Apart from that if you want it to use it in your frontend application then you just need to change your json with your API data and you get complete workable E-commerce for your frontend."
	              />
	            </div>
	            <div id="section-1-2">
	              <AppContent 
	                title="Chat"
	                image="../assets/images/apps/chats.gif"
	                content="In Chat application we provide complete chat designing with basic feature like chat with a people."
	              />
	            </div>
	            <div id="section-1-3">
	              <AppContent 
	                title="Gallery"
	                image="../assets/images/apps/gallery.gif"
	                content="Present your amazing ideas and images using our smooth and attractive gallery"
	              />
	            </div>
	            <div id="section-1-4">
              	  <AppContent 
	                title="To-Do"
	                image="../assets/images/apps/to-do.gif"
	                content="Now it's time to Decrease your burden by listing your daily task in our To-do app and feel relax."
	              />
	            </div>
	            <div id="section-1-5">
	              <AppContent 
	                title="To-Do with Firebase"
	                image="../assets/images/apps/to-do-firebase.gif"
	                content="Now it's time to Decrease your burden by listing your important task in our To-do Firebase app and feel relax."
	              />
	            </div>
	            <div id="section-1-6">
	              <AppContent 
	                title="Email"
	                image="../assets/images/apps/email.gif"
	                content="Use our Email application design to build complete email app."
	              />
	            </div>
	            <div id="section-1-7">
	              <AppContent 
	                title="Bookmark Search"
	                image="../assets/images/apps/bookmark-search.gif"
	                content="You can Bookmark your Favioute application and pages using search bookmark so you can reach to your favioute app quickly.."
	              />
	            </div>
	            <div id="section-1-8">
	              <AppContent 
	                title="Task"
	                image="../assets/images/apps/task-app.gif"
	                content="You can ADD New Task to Assigned to me and remove Completed Task"
	              />
	            </div>
	            <div id="section-1-9">
	              <AppContent 
	                title="Bookmark"
	                image="../assets/images/apps/bookmark-app.gif"
	                content="You Can ADD New Bookmark and then add to your Favioute bookmark or remove from  Favioute bookmark"
	              />
	            </div>
	            <div id="section-1-12">
	              <div className="card-body gulp-section">
	                <h5 className="text-primary">Calender</h5>
	                <p><b>Installing and usage</b></p>
	                <div className="mb-4">
	                  <CopyToClipboard
	                  	id="calendercode"
	                  	text="ng add angular-calendar"
	                  />
	                  <CopyToClipboard
	                  	id="calendercode1"
	                  	text={`\n <mwl-calendar-month-view *ngSwitchCase="CalendarView.Month" [viewDate]="viewDate" [events]="events" \n   [refresh]="refresh" [activeDayIsOpen]="activeDayIsOpen" (dayClicked)="dayClicked($event.day)" \n   (eventClicked)="handleEvent('Clicked', $event.event)" (eventTimesChanged)="eventTimesChanged($event)">\n </mwl-calendar-month-view>`}
	                  />
	                  <CopyToClipboard
	                  	id="calendercode2"
	                  	text={`\nmport { Component,ChangeDetectionStrategy,ViewChild,TemplateRef,} from '@angular/core';\nmport {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';\nmport { Subject } from 'rxjs';\nmport { NgbModal } from '@ng-bootstrap/ng-bootstrap';\nmport {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent,CalendarView} from 'angular-calendar';\n\nonst colors: any = {\ned: {\nrimary: '#ad2121',\necondary: '#FAE3E3',\n,\nlue: {\nrimary: '#1e90ff',\necondary: '#D1E8FF',\n,\nellow: {\nrimary: '#e3bc08',\necondary: '#FDF1BA',\n,\n;\n\nComponent({\nelector: 'mwl-demo-component',\nhangeDetection: ChangeDetectionStrategy.OnPush,\ntyleUrls: ['styles.css'],\nemplateUrl: 'template.html',\n)\nxport class DemoComponent {\nViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;\n view: CalendarView = CalendarView\n CalendarView =\n viewDate: Date = new Dat\n modalData:\n action:\n event:\n\n actions: CalendarEventAction[] =\n\n label: '<i className="fa fa-fw fa-pencil"><\n a11yLabel: \n onClick: ({ event }: { event: CalendarEvent }): void =>\n this.handleEvent('Edited',\n\n\n\n label: '<i className="fa fa-fw fa-times"><\n a11yLabel: \n onClick: ({ event }: { event: CalendarEvent }): void =>\n this.events = this.events.filter((iEvent) => iEvent !==\n this.handleEvent('Deleted',\n\n\n\n refresh: Subject<any> = new Subjec\n   events: CalendarEvent[] =\n  \n   start: subDays(startOfDay(new Date()),\n   end: addDays(new Date(),\n   title: 'A 3 day\n   color: colors\n   actions: this\n   allDay:\n   resizable:\n   beforeStart:\n   afterEnd:\n  \n   draggable:\n  \n  \n   start: startOfDay(new Dat\n   title: 'An event with no end\n   color: colors\n   actions: this\n  \n  \n   start: subDays(endOfMonth(new Date()),\n   end: addDays(endOfMonth(new Date()),\n   title: 'A long event that spans 2\n   color: colors\n   allDay:\n  \n  \n   start: addHours(startOfDay(new Date()),\n   end: addHours(new Date(),\n   title: 'A draggable and resizable\n   color: colors\n   actions: this\n   resizable:\n   beforeStart:\n   afterEnd:\n  \n   draggable:\n  \n  \n   activeDayIsOpen: boolean =\n   constructor(private modal: NgbModal)\n   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void\n   if (isSameMonth(date, this.viewDate))\n   if\n   (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true)\n   events.length ===\n   )\n   this.activeDayIsOpen =\n   } else\n   this.activeDayIsOpen =\n  \n   this.viewDate =\n  \n  \n   eventTimesChanged\n  \n  \n  \n   }: CalendarEventTimesChangedEvent): void\n   this.events = this.events.map((iEvent) =>\n   if (iEvent === event)\n   return\n   ..\n   start:\n   end:\n  \n  \n   return\n  \n   this.handleEvent('Dropped or resized',\n  \n   handleEvent(action: string, event: CalendarEvent): void\n   this.modalData = { event, action\n   this.modal.open(this.modalContent, { size: 'lg'\n  \n   addEvent(): void\n   this.events =\n   ...this\n  \n   title: 'New\n   start: startOfDay(new Dat\n   end: endOfDay(new Dat\n   color: colors\n   draggable:\n   resizable:\n   beforeStart:\n   afterEnd:\n  \n  \n  \n  \n   deleteEvent(eventToDelete: CalendarEvent)\n   this.events = this.events.filter((event) => event !==\n  \n   setView(view: CalendarView)\n   this.view =\n  \n   closeOpenMonthViewDay()\n   this.activeDayIsOpen =\n  \n   }`}
	                  />
	                  <a className="btn btn-solid" href="https://www.npmjs.com/package/angular-calendar" target="_blank"> Supplemental </a>
	                </div>
	                <h5 className="text-primary">Others</h5>
	                <p>There are many others application in Cuba which is help you in improve your knowledge and solve your issues.</p>
	                <ul>
	                  <li>Knowledge Base</li>
	                  <li>Job Search</li>
	                  <li>Learning</li>
	                  <li>Social App</li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div class="col-xxl-2 col-xl-3 right-column">
            <div class="page-sidebar custom-scrollbar" id="myScrollspy">
              <div class="page-right-sidebar">
                <ul class="nav flex-column custom-scrollbar">
                  <li class="nav-item"><a class="nav-link quick-links active" href="#section-1" data-original-title="" title="">
                      <h5 class="mb-0">Applications</h5></a>
                    <ul class="nav flex-column p-l-10 m-t-5 set-padding">
                      <li class="nav-item"><a class="nav-link" href="#section-1-1" data-original-title="" title=""><i class="fa fa-angle-right"></i>E-commerce</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-2" data-original-title="" title=""><i class="fa fa-angle-right"></i>Chat</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-3" data-original-title="" title=""><i class="fa fa-angle-right"></i> Gallery</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-4" data-original-title="" title=""><i class="fa fa-angle-right"></i> To-Do</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-5" data-original-title="" title=""><i class="fa fa-angle-right"></i>To-Do with Firebase</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-6" data-original-title="" title=""><i class="fa fa-angle-right"></i>Email</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-7" data-original-title="" title=""><i class="fa fa-angle-right"></i>Bookmark Search</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-8" data-original-title="" title=""><i class="fa fa-angle-right"></i>Task</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-9" data-original-title="" title=""><i class="fa fa-angle-right"></i>Bookmark</a></li>
                      <li class="nav-item"><a class="nav-link" href="#section-1-12" data-original-title="" title=""><i class="fa fa-angle-right"></i>Calender</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
		</Layout>
	)
}

export default AngularApp;