import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";
import { Event } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent,HeaderComponent]
})
export class RoomsComponent implements OnInit, DoCheck,AfterViewInit{
 
// ViewChild - Using ViewChild;-> We create a new instance of a specific component in another component
@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;


//In order to access the component in the @ViewChild instance you have to access it under hook ngAfterViewInit cycle.

//Now there are two attributes that should be included at line 18 => 
// @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
// By  default static is always false
// By static being set to true will mean
ngAfterViewInit(){


  console.log(this.headerComponent);
  
}

 roomList: RoomList[] = [];

 ngDoCheck(): void {
   console.log("Do Check is called");
   
 }

  ngOnInit(): void { 

    this.roomList = 
    
[
  {
    roomNumber:1,
    roomType: "Delux Room",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021'),
    rating: 344.125
  },
  {
    roomNumber:2,
    roomType: "Delux Room Two",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 1500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Jan-2024'),
    checkoutTime: new Date('12-June-2024'),
      rating: 0.01
    
  },
  {
    roomNumber:3,
    roomType: "Delux Room Three",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 2500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021'),
    rating: 2.145
  },
  {
    roomNumber:4,
    roomType: "Delux Room Four",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 3500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021'),
    rating: 3.156
  },
  {
    roomNumber:5,
    roomType: "Delux Room Five",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
    price: 500,
    photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Jan-2021'),
    rating: 0.1
  }
]
  }


  hotelName: string = "Hotel Kamau";
  numberOfRooms:number = 10;
  title!: string;

  hideRooms:boolean = false;

  rooms: Room = {
    totalRooms:0,
    availableRooms:10,
    bookedRooms: 5
  }

  toggle():boolean{
    this.title = 'My super hotel';

    return this.hideRooms = !this.hideRooms;
  }


  roomSelected(room: RoomList ){

  console.log(room);
      
  }

  addRoom(){

    let addRoomNumber: number = 0;

    for ( let i=0; i<this.roomList.length; i++){

      addRoomNumber = this.roomList[i].roomNumber
    }
    const room: RoomList =
    {
      roomNumber:addRoomNumber + 1,
      roomType: "Delux Room Four",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom,Kitchen",
      price: 3500,
      photos: 'https://www.istockphoto.com/photo/confident-young-woman-arriving-in-hotel-reception-gm1352189114-427686847?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fafrica%2520hotels%2F&utm_term=africa+hotels',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Jan-2021'),
      rating: 3.156
    }

  
    this.roomList = [...this.roomList,room]
    console.log(this.roomList);
    
  }
  

}
function View(target: RoomsComponent, propertyKey: 'roomList'): void {
  throw new Error('Function not implemented.');
}

