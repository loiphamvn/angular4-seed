import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '/app/layout/header/header.html'
})

export class HeaderComponent {
  public lang: string = 'English';
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public setLang(lang) {
    console.log(lang);
    this.lang = lang;
  }
}
