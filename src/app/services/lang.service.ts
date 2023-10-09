import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private language = new BehaviorSubject('en');
  constructor() {}

  getCurrentLang() {
    return this.language.asObservable();
  }

  setCurrentLang(newLang: string) {
    this.language.next(newLang);
  }
}


