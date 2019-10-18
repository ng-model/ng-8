import { Component, OnInit } from '@angular/core';
import { Person } from './persons';
import { PERSONS } from './mock-person';

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.scss']
})
export class ResponsibilityComponent implements OnInit {

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