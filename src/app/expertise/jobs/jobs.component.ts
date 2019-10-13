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
  {'year': 'Dec, 2017 - Current', 'ti': '', 'position': 'Web Developer Lead', 'client': 'WEX Inc', 'class': 'text-success', 'icon': 'done_all', 'duties': 'Develop the Angular Web application as per the business requirement'},
  {'year': 'June, 2016 - Oct, 2017', 'ti': 'timeline-inverted', 'position': 'Web Developer', 'client': 'WEX Inc', 'class': 'text-warning', 'icon': 'timer', 'duties': 'Develop the Angular Web application as per the business requirement'},
  {'year': 'March, 2016 - May, 2016', 'ti': '', 'position': 'Application Developer', 'client': 'E & J Gallo Winery', 'class': 'text-success', 'icon': 'timer', 'duties': 'Develop the Angular Web application as per the business requirement'},
  {'year': 'Dec, 2015 - Feb, 2016', 'ti': 'timeline-inverted', 'position': 'Web/UI Developer', 'client': 'CNO Financial Group', 'class': 'text-info', 'icon': 'timer', 'duties': 'Develop the Angular Web application as per the business requirement'},
  {'year': 'Feb, 2015 - Nov, 2015', 'ti': '', 'position': 'Application Developer', 'client': 'CSAA Insurance Group', 'class': 'text-primary', 'icon': 'timer', 'duties': 'Develop the Angular Web application as per the business requirement'},
  {'year': 'July, 2012 - June, 2013', 'ti': 'timeline-inverted', 'position': 'Developer', 'client': 'Satyam', 'class': 'text-danger', 'icon': 'timer', 'duties': 'Develop the Angular Web application as per the business requirement'},
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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