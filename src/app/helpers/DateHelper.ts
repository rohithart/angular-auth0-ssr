import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { DateFormat } from './DateConstants';
@Injectable({
  providedIn: 'root'
})
export class DateHelper {
  constructor() {}

  getDateString(date: any): string {
    if(this.isValidDate(date)) {
      return moment(date, DateFormat).format(DateFormat);
    }
    return 'No date';
  }

  getDateStringFromDate(date: any): string {
    if(this.isValidDate(date)) {
      return moment(date).format(DateFormat);
    }
    return 'No date';
  }

  getExpiryText(date: string) {
    const days = this.daysFromToday(date);
    if(!isNaN(days)) {
      if(days > 0) {
        return `Expiring in ${days} days.`
      } else if (days < 0) {
        return `Expired ${days*-1} days before.`
      }
      return 'Expiring today'
    }
    return 'No date'
  }

  daysFromToday (fromDateString: string) {
    const fromDate = moment(fromDateString, DateFormat).toDate();
    const toDate = this.getToday();
    const daysRemaining = moment(fromDate, DateFormat).diff(moment(toDate, DateFormat), 'days');
    return daysRemaining;
  }

  differenceFromToday(fromDateString: string, numberOfDays: number) {
    const fromDate = moment(fromDateString, DateFormat).toDate();
    const toDate = this.getToday();
    if(!this.pastDate(fromDate)) {
      return moment(fromDate, DateFormat).diff(moment(toDate, DateFormat), 'days') === numberOfDays;
    }
    return false;
  }

  differenceBetweenToday(fromDateString: string, numberOfDays: number) {
    const fromDate = moment(fromDateString, DateFormat).toDate();
    const toDate = this.getToday();
    if(!this.pastDate(fromDate)) {
      return moment(fromDate, DateFormat).diff(moment(toDate, DateFormat), 'days') < numberOfDays;
    }
    return false;
  }

  pastDate(date: Date) {
    const now = this.getToday();
    if (moment(now).format(DateFormat) > moment(date).format(DateFormat)) {
      return true
    } else {
      return false;
    }
  }

  differenceIsToday(fromDateString: string) {
    const fromDate = moment(fromDateString, DateFormat).toDate();
    const toDate = this.getToday();
    if(this.isToday(fromDate)) {
      return true;
    }
    return false;
  }

  isValidDate(date: string) {
    return moment(date, DateFormat).isValid();
  }


  private isToday(date: Date) {
    const now = this.getToday();
    if (moment(now).format(DateFormat) == moment(date).format(DateFormat)) {
      return true
    } else {
      return false;
    }
  }

  private getToday() {
    return moment(moment(new Date()).format(DateFormat), DateFormat).toDate();
  }
}
