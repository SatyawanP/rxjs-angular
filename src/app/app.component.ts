import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  //example of observable creation
  ngOnInit(): void {
    of(2, 4, 6, 8, 10).subscribe({
      next: (item) => console.log(item),
    });

    from([5, 10, 15, 20]).subscribe({
      next: (item) => console.log(`resulting item ${item}`),
      error: (err) => console.log(`resulting item ${err}`),
      complete: () => console.log('complete'),
    });
  }
}
