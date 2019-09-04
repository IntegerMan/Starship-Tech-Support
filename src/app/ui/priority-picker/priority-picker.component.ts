import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ssit-priority-picker',
  templateUrl: './priority-picker.component.html',
  styleUrls: ['./priority-picker.component.styl']
})
export class PriorityPickerComponent implements OnInit {

  @Input()
  public value: number = 3;

  @Output()
  public valueChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public onValueClick(selectedValue: number): void {
    if (this.value !== selectedValue) {
      this.value = selectedValue;
      this.valueChanged.emit(selectedValue);
    }
  }
}
