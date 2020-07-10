/*!

=========================================================
* Argon Design System Angular - v1.1.0
=========================================================

* Product Page: https://www. .com/product/argon-design-system-angular
* Copyright 2019   (https://www. .com)
* Licensed under MIT (https://github.com/official/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by  

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
