import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telemetryHowLongAgo'
})
export class TelemetryHowLongAgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const now = new Date().getTime();
    const updated = new Date(value).getTime();
    const difference = now - updated;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `Created ${days} day(s) ago`;
    } else if (hours > 0) {
      return `Created ${hours} hour(s) ago`;
    } else if (minutes > 0) {
      return `Created ${minutes} minute(s) ago`;
    } else {
      return `Created ${seconds} second(s) ago`;
    }
  }

}
