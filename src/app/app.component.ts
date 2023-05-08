import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { AsyncSubject, BehaviorSubject, ConnectableObservable, ReplaySubject, Subject, Subscription, interval, multicast, of, refCount, throttleTime, fromEvent, asyncScheduler, map, switchMap, catchError, Observable, EMPTY, NEVER, retry, retryWhen, scan, from, tap, takeWhile, takeUntil, take, takeLast, first, last, mergeMap, concat, forkJoin} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface UserData {
  name: string;
  age: number;
  email: string;
  phone: string;
}

const ELEMENT_DATA: UserData[] = [
  {name: 'kohn Doe', age: 30, email: 'johndoe@mail.com', phone: '+1-202-555-0189'},
  {name: 'Nane Doe', age: 25, email: 'janedoe@mail.com', phone: '+1-202-555-0190'},
  {name: 'Bob Smith', age: 45, email: 'bobsmith@mail.com', phone: '+1-202-555-0191'},
  {name: 'Alice Johnson', age: 35, email: 'alicejohnson@mail.com', phone: '+1-202-555-0192'},
  {name: 'zohn Doe', age: 30, email: 'johndoe@mail.com', phone: '+1-202-555-0189'},
  {name: 'bane Doe', age: 25, email: 'janedoe@mail.com', phone: '+1-202-555-0190'},
  {name: 'yob Smith', age: 45, email: 'bobsmith@mail.com', phone: '+1-202-555-0191'},
  {name: 'clice Johnson', age: 35, email: 'alicejohnson@mail.com', phone: '+1-202-555-0192'},
  {name: 'xohn Doe', age: 30, email: 'johndoe@mail.com', phone: '+1-202-555-0189'},
  {name: 'mane Doe', age: 25, email: 'janedoe@mail.com', phone: '+1-202-555-0190'},
  {name: 'rob Smith', age: 45, email: 'bobsmith@mail.com', phone: '+1-202-555-0191'},
  {name: 'lice Johnson', age: 35, email: 'alicejohnson@mail.com', phone: '+1-202-555-0192'},
  {name: 'dohn Doe', age: 30, email: 'johndoe@mail.com', phone: '+1-202-555-0189'},
  {name: 'vane Doe', age: 25, email: 'janedoe@mail.com', phone: '+1-202-555-0190'},
  {name: 'gob Smith', age: 45, email: 'bobsmith@mail.com', phone: '+1-202-555-0191'},
  {name: 'slice Johnson', age: 35, email: 'alicejohnson@mail.com', phone: '+1-202-555-0192'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'app';
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  displayedColumns: string[] = ['name', 'age', 'email', 'phone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA)
  applyFilter(event:any){
    const filterValue=event.target?.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator
  }



  
}
