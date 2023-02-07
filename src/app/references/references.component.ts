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
    { name: 'Name', connection: 'Profession', email: 'E-mail' },
    {
      name: 'Kisses Reyes',
      connection: 'University Professor',
      email: 'ksgmail.com',
    },
    { name: 'Noie Manoy', connection: 'Web Developer', email: 'nmgmail.com' },
    {
      name: 'Jed Bartolome',
      connection: 'Web Developer',
      email: 'jbgmail.com',
    },
    {
      name: 'Adrian Sarabia',
      connection: 'University Professor',
      email: 'asgmail.com',
    },
    {
      name: 'Mark Laus',
      connection: 'University Professor',
      email: 'mlgmail.com',
    },
  ];
}
