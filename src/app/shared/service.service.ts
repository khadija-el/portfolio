import { Injectable } from '@angular/core';
import configs from '../../assets/json/configs.json';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  configs = configs;
  public private = '';
  public filter = '';
  constructor() { }
}
