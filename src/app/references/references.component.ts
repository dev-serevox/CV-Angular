import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  addReference = [
    { name: 'Name', prof: 'Profession', company: 'Company' },
    {
      name: 'Elon Musk',
      prof: 'CEO',
      company: 'Twitter',
    },
    { name: 'Satya Nadella', prof: 'CEO', company: 'Microsoft' },
    {
      name: 'Jack Ma',
      prof: 'Chairman',
      company: 'Alibaba Group',
    },
    {
      name: 'Sangho Jo',
      prof: 'Southeast Asia CEO',
      company: 'Samsung',
    },
    {
      name: 'Tim Cook',
      prof: 'CEO',
      company: 'Apple',
    },
  ];
}
