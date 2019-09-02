import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssit-priority-picker',
  templateUrl: './priority-picker.component.html',
  styleUrls: ['./priority-picker.component.styl']
})
export class PriorityPickerComponent implements OnInit {

  @Input()
  public value: number = 3;

  constructor() { }

  ngOnInit() {
  }

  public onValueClick(selectedValue: number): void {
    this.value = selectedValue;
  }
}
