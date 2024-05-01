import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sc-input-box',
  templateUrl: './sc-input-box.component.html',
  styleUrl: './sc-input-box.component.scss'
})
export class ScInputBoxComponent {
  @Input() name!: string;
  @Input() number!: string;
  @Input() email!: string;
  @Input() query!: string;
  @Input() submitbtn!: string; 
  @Input() instance = new FormControl();
}
