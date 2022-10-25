import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent implements OnInit, AfterContentInit {
  @Input() data: any[] = [];

  @ContentChildren(ColumnComponent)
  columnDefinitions!: QueryList<ColumnComponent>;

  constructor() {}

  ngAfterContentInit(): void {}

  ngOnInit(): void {}
}
