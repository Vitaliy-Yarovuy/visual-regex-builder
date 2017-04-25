import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    alert("HELB I NEED SOMEBODY");
  }

}
