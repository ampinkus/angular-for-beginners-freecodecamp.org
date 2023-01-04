import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from '../room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';
  addressNumber: number = 867;
  numberOfRooms: any = '10 single + 20 suites';
  hideRooms = false;
  hotelObject = {
    Category: 'Premium',
    Age: 10,
    Inaugurated: 1976,
  };

  // we use the object of the interface
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  //create a list of different rooms
  roomList: RoomList[] = [
    {
      roomNumber: 100,
      roomType: 'Deluxe room',
      amenities: 'Air Conditioner, WiFi, Tv, bathroom, kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-jan-2023'),
      checkoutTime: new Date('12-jan-2023'),
    },
    {
      roomNumber: 200,
      roomType: 'Standard room',
      amenities: 'Air Conditioner, Tv, bathroom',
      price: 300,
      photos:
        'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      checkinTime: new Date('21-jan-2023'),
      checkoutTime: new Date('23-jan-2023'),
    },
    {
      roomNumber: 300,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, WiFi, Tv, bathroom, kitchen, living room',
      price: 800,
      photos:
        'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      checkinTime: new Date('17-jan-2023'),
      checkoutTime: new Date('20-jan-2023'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    console.log(this.hideRooms);
  }
}
