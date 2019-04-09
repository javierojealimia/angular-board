import { Component, OnInit } from '@angular/core';
import { Option } from './model/option.model';
import { Contact } from './model/contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  public header: string;
  public description: string;
  public numContacts: number;
  public counterClass: string;
  public formHidden: boolean;

  public workStatuses: Option[];
  public contact: Contact;

  public contacts: Contact[] = [];

  constructor() { }

  ngOnInit() {
    this.header = 'Contacts';
    this.description = 'Manage your contact list';
    this.formHidden = false;
    this.counterClass = 'tag secondary';
    this.numContacts = 0;

    this.contact = {
      name: '',
      isVIP: false,
      gender: '',
      workStatus: '0',
      company: '',
      education: ''
    };
    this.workStatuses = [
      { id: 0, description: 'unknow' },
      { id: 1, description: 'student' },
      { id: 2, description: 'unemployed' },
      { id: 3, description: 'employed' }
    ];
  }

  public saveContact() {
    this.contacts.push({ ...this.contact });
    this.numContacts = this.contacts.length;
  }

  public deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c.name !== contact.name);
    this.numContacts = this.contacts.length;
  }

}
