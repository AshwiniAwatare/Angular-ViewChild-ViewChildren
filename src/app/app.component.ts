import {
  Component,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  /*
   ----------------------------
   ViewChild
   ----------------------------
   - Used to access ONE element or ONE child component
   - Here we are accessing <h1 #singleHeading>
  */
  //  Definite Assignment Assertion (!) tells TypeScript that a class property will be assigned later, even if it’s not initialized in the constructor.
  @ViewChild('singleHeading') headingElement!: ElementRef;

  /*
   ----------------------------
   ViewChildren
   ----------------------------
   - Used to access MULTIPLE elements or components
   - All elements having #listItem
   - Returns a QueryList (Angular-managed list)
  */
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;

  /*
   ngAfterViewInit runs AFTER Angular has rendered
   the template (DOM exists only after ngAfterViewInit)
  */
  ngAfterViewInit(): void {
    /* ---------- ViewChild usage ---------- */
    // Access actual DOM using nativeElement
    console.log('Heading text:', this.headingElement.nativeElement.innerText);

    // Modify DOM safely after view init

    this.headingElement.nativeElement.style.color = 'red';

    /* ---------- ViewChildren usage ---------- */

    // Logs QueryList (collection of ElementRefs)
    console.log('List items:', this.listItems);

    // Loop through each element
    this.listItems.forEach((item, index) => {
      item.nativeElement.style.color = 'blue';
    });
  }
}
