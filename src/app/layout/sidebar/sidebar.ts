import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: '/app/layout/sidebar/sidebar.html'
})

export class SidebarComponent {
  public isopen: boolean = false;

  public navigation: Object = [{
    path: 'dashboard',
    name: 'Dashboard',
    icon: 'icon-speedometer'
  }, {
    path: 'ui',
    name: 'UI Kit',
    icon: 'icon-magnet',
    expanded: false,
    child: [{
      path: 'typography',
      name: 'Typography',
      icon: 'icon-docs'
    }, {
      path: 'components',
      name: 'Components',
      icon: 'icon-magic-wand'
    }, {
      path: 'grids',
      name: 'Grids',
      icon: 'icon-grid'
    }, {
      path: 'icons',
      name: 'Icons',
      icon: 'icon-doc'
    }, {
      path: 'buttons',
      name: 'Buttons',
      icon: 'icon-cursor'
    }]
  }, {
    path: 'tables',
    name: 'Tables',
    icon: 'icon-list',
    expanded: false,
    child: [{
      path: 'static',
      name: 'Static Tables',
      icon: 'icon-arrow-right'
    }, {
      path: 'responsive',
      name: 'Responsive Tables',
      icon: 'icon-arrow-right'
    }, {
      path: 'dynamic',
      name: 'Dynamic Tables',
      icon: 'icon-arrow-right'
    }]
  }, {
    path: 'forms',
    name: 'Forms',
    icon: 'icon-heart',
    expanded: false,
    child: [{
      path: 'basic',
      name: 'Forms Basic',
      icon: 'icon-arrow-right'
    }, {
      path: 'elements',
      name: 'Forms Elements',
      icon: 'icon-arrow-right'
    }, {
      path: 'responsive',
      name: 'Forms Validation',
      icon: 'icon-arrow-right'
    }, {
      path: 'wizard',
      name: 'Forms Wizard',
      icon: 'icon-arrow-right'
    }]
  }, {
    path: 'maps',
    name: 'Maps',
    icon: 'icon-map',
    expanded: false,
    child: [{
      path: 'google',
      name: 'Google Maps',
      icon: 'icon-arrow-right'
    }, {
      path: 'leaflet',
      name: 'Leaflet Maps',
      icon: 'icon-arrow-right'
    }, {
      path: 'bubble',
      name: 'Bubble Maps',
      icon: 'icon-arrow-right'
    }, {
      path: 'line',
      name: 'Line Maps',
      icon: 'icon-arrow-right'
    }]
  }, {
    path: 'charts',
    name: 'Charts',
    icon: 'icon-chart',
    expanded: false,
    child: [{
      path: 'chartist',
      name: 'ChartistJS',
      icon: 'icon-arrow-right'
    }, {
      path: 'chartjs',
      name: 'chartJS',
      icon: 'icon-arrow-right'
    }, {
      path: 'bubble',
      name: 'Bubble Maps',
      icon: 'icon-arrow-right'
    }, {
      path: 'line',
      name: 'Line Maps',
      icon: 'icon-arrow-right'
    }]
  }, {
    path: 'pages',
    name: 'pages',
    icon: 'icon-page',
    expanded: false,
    child: [{
      path: 'register',
      name: 'Register',
      icon: 'icon-register'
    }, {
      path: 'signin',
      name: 'Sign in',
      icon: 'icon-login'
    }, {
      path: 'error404',
      name: 'Error 404',
      icon: 'icon-arrow-right'
    }, {
      path: 'error500',
      name: 'Error 500',
      icon: 'icon-arrow-right'
    }]
  }];

  public application: Object = [{
    path: 'tasks',
    name: 'Tasks',
    icon: 'icon-list'
  }, {
    path: 'Calendar',
    name: 'calendar',
    icon: 'icon-calendar'
  }, {
    path: 'mail',
    name: 'Mail',
    expanded: false,
    icon: 'icon-envelope',
    child: [{
      path: 'mail/inbox',
      name: 'Inbox',
      icon: 'icon-envelope-letter'
    }, {
      path: 'mail/send',
      name: 'Sent mail',
      icon: 'icon-plane'
    }, {
      path: 'mail/simple',
      name: 'Simple mail',
      icon: 'icon-arrow-right'
    }]
  }];

  public toggleCollapsed($event: MouseEvent): void {
    console.log(event);
    $event.preventDefault();
    $event.stopPropagation();
    this.isopen = !this.isopen;
  }
}
