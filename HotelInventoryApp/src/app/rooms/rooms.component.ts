import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';
  addressNumber: number = 867;
  numberOfRooms: any = '10 single + 20 suites';
  hideRooms = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    console.log(this.hideRooms);
  }
}
