export class LocalService {

  get(key: string) {
    let record: any;
    record = JSON.parse(localStorage.getItem(key));
    if (!record) {
      return null;
    }
    return new Date().getTime() < record.timestamp && JSON.parse(record.value);
  }

  set(key: string, val: any, seconds: number = 3600) {
    let expire: number, record: any;
    expire = seconds * 60 * 1000;
    record = {
      value: JSON.stringify(val),
      timestamp: new Date().getTime() + expire
    };
    localStorage.setItem(key, JSON.stringify(record));
    return val;
  }

  unset(key: string) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }
}
