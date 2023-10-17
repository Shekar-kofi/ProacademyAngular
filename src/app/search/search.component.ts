import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }
  serachValue: string = '';

  changeSearchValue(eventData: Event) {

    this.serachValue = (<HTMLInputElement>eventData.target).value

  }

}
