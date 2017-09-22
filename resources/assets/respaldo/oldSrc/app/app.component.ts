import { Component } from '@angular/core';

@Component({
	//esta es la app route que es instanciada desde welcome.blade.php que es el sistema de plantillas de laravel
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})



export class AppComponent {
	title = 'Laravel 5 Angular 4 Demo';
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/