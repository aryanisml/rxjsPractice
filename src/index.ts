import {
  AsyncSubject,
  BehaviorSubject,
  observable,
  of,
  ReplaySubject,
  Subject
} from "rxjs";
import { map } from "rxjs/operators";

const source = of("World").pipe(map((x) => `Hello ${x}!`));

source.subscribe(console.log);

const replaySubject = new ReplaySubject(3);
replaySubject.next(100);
replaySubject.next(120);
replaySubject.next(120000);
replaySubject.next(120001);
replaySubject.next(120002);
replaySubject.subscribe((d) => {
  console.log(d);
});

const behaviourSubject = new BehaviorSubject("hello behaviourSubject");
console.log(behaviourSubject.getValue());
behaviourSubject.subscribe((d) => {
  console.log(d);
});

const asyncSubject = new AsyncSubject();
asyncSubject.next(11222);
asyncSubject.next(312222);
// asyncSubject.complete();
asyncSubject.next(3100000);
asyncSubject.subscribe((d) => {
  console.log(d);
});

const subject = new Subject();
subject.next("subject   1g");
subject.subscribe((d) => {
  console.log(d);
});
subject.next("subject   g");
// subject.subscribe((d) => {
//   console.log(d);
// });
