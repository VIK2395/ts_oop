export {};

// Notify subscribers about some event or state changes

// https://www.youtube.com/watch?v=-oLDJ2dbadA&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=12
// https://www.youtube.com/watch?v=YJVj4XNASDk
// https://refactoring.guru/design-patterns/observer
// https://www.tutorialspoint.com/design_pattern/observer_pattern.htm
// https://en.wikipedia.org/wiki/Observer_pattern

enum Event {
  NEW_ITEM = 'NEW_ITEM',
  SALE = 'SALE',
}

type Action = {
  type: Event;
  payload?: Record<string, any>;
};

interface IEventListener {
  update(action: Action): void;
}

// Observer // Subscriber
class EmailMessageListener implements IEventListener {
  private readonly email: string; // observer // subscriber data

  constructor(email: string) {
    this.email = email;
  }

  update(action: Action): void {
    switch (action.type) {
      case 'NEW_ITEM':
        console.log(this.email + ' got Email notification:: NEW_ITEM');
        break;
      case 'SALE':
        console.log(this.email + ' got Email notification:: SALE');
        break;
      default:
        console.log(this.email + ' got Email notification:: SPAM');
        break;
    }
  }
}

// Observer // Subscriber
class MobileAppListener implements IEventListener {
  private readonly userName: string; // observer // subscriber data

  constructor(userName: string) {
    this.userName = userName;
  }

  update(action: Action): void {
    switch (action.type) {
      case 'NEW_ITEM':
        console.log(this.userName + ' got Mobile notification:: NEW_ITEM');
        break;
      case 'SALE':
        console.log(this.userName + ' got Mobile notification:: SALE');
        break;
      default:
        console.log(this.userName + ' got Mobile notification:: SPAM');
        break;
    }
  }
}

// Subject
class NotificationService {
  // subject state to be listened to
  private state: Record<string, any> = {};
  // subscribers // observers // listeners
  private readonly customers: Map<Event, Array<IEventListener>> = new Map();

  constructor() {
    Object.values(Event).forEach((event) => {
      this.customers.set(event, []);
    });
    // this.customers.set(Event.NEW_ITEM, []);
    // this.customers.set(Event.SALE, []);
  }

  getState(): Record<string, any> {
    return this.state;
  }

  setState(state: Record<string, any>, action: Action): void {
    this.state = state;
    this.notify(action);
  }

  subscribe(eventType: Event, listener: IEventListener): void {
    this.customers.get(eventType).push(listener);
  }

  unsubscribe(eventType: Event, listener: IEventListener): void {
    const eventCustomers = this.customers.get(eventType);
    const index = eventCustomers.indexOf(listener);
    eventCustomers.splice(index, 1);
  }

  notify(action: Action): void {
    this.customers.get(action.type).forEach((listener) => listener.update(action));
  }
}

// Subject
const notificationService = new NotificationService();

// Observers
const mobileAppListener = new MobileAppListener('mobile_user');
const emailMessageListener1 = new EmailMessageListener('email_user_1');
const emailMessageListener2 = new EmailMessageListener('email_user_2');

// subscribtions
notificationService.subscribe(Event.NEW_ITEM, mobileAppListener);
notificationService.subscribe(Event.NEW_ITEM, emailMessageListener1);
notificationService.subscribe(Event.SALE, emailMessageListener1);
notificationService.subscribe(Event.SALE, emailMessageListener2);

// notify
notificationService.notify({ type: Event.NEW_ITEM });
notificationService.notify({ type: Event.SALE });

// unsubscribe
notificationService.unsubscribe(Event.SALE, emailMessageListener1);

console.log('unsubscribed email_user_1 SALE');

notificationService.notify({ type: Event.SALE });

// subscribe again
notificationService.subscribe(Event.SALE, emailMessageListener1);

console.log('subscribed again email_user_1 SALE');

notificationService.notify({ type: Event.SALE });

console.log(notificationService.getState());

notificationService.setState({ iphone: '$1000' }, { type: Event.NEW_ITEM });

console.log(notificationService.getState());
