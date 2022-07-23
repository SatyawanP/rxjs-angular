import { Component, OnInit, VERSION } from '@angular/core';
import { from, map, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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

    from([5, 10, 15, 20, 4, 25])
      .pipe(
        tap((item) => console.log(`emitted item: ${item}`)),
        map((item) => item * 2),
        map((item) => item - 8),
        map((item) => {
          if (item == 0) {
            throw new Error('zero detected');
          }
          return item;
        })
      )
      .subscribe({
        next: (item) => console.log(`resulting item ${item}`),
        error: (err) => console.log(`resulting item ${err}`),
        complete: () => console.log('complete'),
      });
  }
}
