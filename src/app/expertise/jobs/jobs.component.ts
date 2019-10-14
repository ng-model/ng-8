import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  closeResult: string;
  date; 
  jobs = [
  {'year': 'Dec, 2017 - Current', 'ti': '', 'position': 'Web Developer Lead', 'client': 'WEX Inc', 'class': 'text-success', 'icon': 'done_all', 'duties': 'Responsible for developing POC mobile/web and integrate with REST api to deliver the product.'},
  {'year': 'June, 2016 - Oct, 2017', 'ti': 'timeline-inverted', 'position': 'Web Developer', 'client': 'WEX Inc', 'class': 'text-warning', 'icon': 'timer', 'duties': 'Develop/Lead the Onsite Angular/UI team as well code the UX visuals into beautiful Angular Material Web pages as per the client requirement'},
  {'year': 'March, 2016 - May, 2016', 'ti': '', 'position': 'Application Developer', 'client': 'E & J Gallo Winery', 'class': 'text-success', 'icon': 'timer', 'duties': 'Develop the Web application in KENDO, to handle bulk amount of data in grids'},
  {'year': 'Dec, 2015 - Feb, 2016', 'ti': 'timeline-inverted', 'position': 'Web/UI Developer', 'client': 'CNO Financial Group', 'class': 'text-info', 'icon': 'timer', 'duties': 'Develop a cordova Hybrid application in Angular v1.x'},
  {'year': 'Feb, 2015 - Nov, 2015', 'ti': '', 'position': 'Application Developer', 'client': 'CSAA Insurance Group', 'class': 'text-primary', 'icon': 'timer', 'duties': 'To develop an Insurance Web app with JAVA in the backend and to meet the deadline in time to ship the software'},
  {'year': 'July, 2012 - June, 2013', 'ti': 'timeline-inverted', 'position': 'Developer', 'client': 'Satyam', 'class': 'text-danger', 'icon': 'timer', 'duties': 'Gather business requirements, learn to code peer to peer, push code to Github, planning poker to size the user stories.'},
];
  year: any;
  position: any;
  selectedJob: any;
  client: void;
  duties: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.date = moment();
  }


  open(content) {
    this.modalService.open(content, { scrollable: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  edit(job) {
    this.selectedJob = job;
    this.year = this.selectedJob.year;
    this.position = this.selectedJob.position;
    this.client = this.selectedJob.client;
    this.duties = this.selectedJob.duties;
    console.log(job);
  }
}