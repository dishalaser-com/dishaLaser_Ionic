import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
})
export class NewCasePage implements OnInit {
  name = 'multiselect dd';
  dropdownList = [];
  selectedItems: any;
  dropdownSettings = {};
  constructor(
    private pickerCtrl: PickerController,
    private authService: AuthService
  ) { }
  duration = 'Days';
  bodyPart = 'Face';
  ngOnInit() {
    this.dropdownList = [
      { 'id': 1, 'itemName': 'Headache' },
      { 'id': 2, 'itemName': 'Nausea' },
      { 'id': 3, 'itemName': 'Pain' },
    ];

    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Symptoms',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
    console.log(this.selectedItems);
  }

  onItemSelect(item: any) {
    console.log(item['itemName']);
  }

  OnItemDeSelect(item: any) {
    console.log(item['itemName']);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  async showBasicPicker() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'duration',
          options: [
            { text: 'Months', value: 'A' },
            { text: 'Years', value: 'B' },
            { text: 'Days', value: 'C' }
          ]
        }]
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('duration');
      this.duration = col.options[col.selectedIndex].text;
    });
  }

  async showBasicPickerBP() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'bodyPart',
          options: [
            { text: 'Head', value: 'A' },
            { text: 'Face', value: 'B' },
            { text: 'Legs', value: 'C' },
            { text: 'Hands', value: 'D' },
            { text: 'Wrist', value: 'E' },
            { text: 'Chest', value: 'F' },
            { text: 'Waist', value: 'G' }
          ]
        }]
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('bodyPart');
      this.bodyPart = col.options[col.selectedIndex].text;
    });
  }

  addCase() {
    // save case details to Firebase DB
  }

  signOut() {
    this.authService.signOut();
  }

}
