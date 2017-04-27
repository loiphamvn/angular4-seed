import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';

@NgModule({
  imports: [],
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutModule {}
