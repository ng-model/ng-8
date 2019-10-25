import { Component, OnInit } from '@angular/core';
import { Person } from './persons';
import { PERSONS } from './mock-person';

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.scss']
})
export class ResponsibilityComponent implements OnInit {
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];
  public pieData: any = [
    { category: 'Paid', value: 0.62 },
    { category: 'Not paid', value: 0.38 }
  ]
  public labelContent(e: any): string {
    return e.category;
  }
  dtOptions: any = {};
  persons: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bflrtip',
      // Configure the buttons
      buttons: [
        {
          extend: "excel",
          className: "btn-sm btn-dark",
          titleAttr: 'Excel',
          text: 'Excel',
          init: function (api, node, config) {
            $(node).removeClass('dt-button')
          }
        }, {
          extend: "print",
          className: "btn-sm btn-dark",
          titleAttr: 'Print',
          text: 'Print',
          init: function (api, node, config) {
            $(node).removeClass('dt-button')
          }
        }, {
          extend: "copy",
          className: "btn-sm btn-dark mr-3",
          titleAttr: 'Copy',
          text: 'Copy',
          init: function (api, node, config) {
            $(node).removeClass('dt-button')
          }
        }]
    };
    this.persons = PERSONS;
  }
}