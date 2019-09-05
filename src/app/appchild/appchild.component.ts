import {Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appchild',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit {
  @Input() tshirt;
  instock;
  error=false;
  @Output() cancelevent=new EventEmitter();
  @Output() buyevent=new EventEmitter();
  ngOnChanges(): void
  {

  }
  buy()
  {
    if(this.instock)
    {
      if(this.instock > this.tshirt.instock)
      {
        alert("not availabale");
      }
      else
      {
        this.tshirt.instock=this.tshirt.instock-this.instock;
        this.buyevent.emit(this.tshirt);
      }
    }
  }
  cancel()
  {
    this.cancelevent.emit(false);
  }
  constructor() { }

  ngOnInit() : void
  {
    console.log("init");
  }

}

