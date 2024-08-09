import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { CommonModule } from '@angular/common';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {


  @Input() rooms: RoomList[] = [];
  @Input() title!: string;
  // Whenever you put an input tag in angular,you're meaning that we should make
  // the above Input as a valid html tag of the same component ( templateUrl: './rooms-list.component.html',)

  // This way you can re-use this component anywhere you want cause it shows how to render data not how to retrieve it.

  // Smart Component & Dumb Compenent , Parent and Child Component - This is what we call such a rltship.

  // In real world application, try to split your code into smaller chunks like this.

  // This component being a dumb compoenent cannot take instructions on its own, so it relies on the parent component to take commands.

  // Essentially we're passing data from Child to Parent Component now through @Output which is an Event.

  @Output() selectedRoom = new EventEmitter<RoomList>;

  ngOnInit(): void {
    
  }


  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }


  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }


}
