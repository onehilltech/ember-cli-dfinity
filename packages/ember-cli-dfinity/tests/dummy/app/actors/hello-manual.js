import { Actor, query } from 'ember-cli-dfinity';

export default class HelloManualActor extends Actor {
  /// Define the green query method.
  @query('text', 'text')
  greet;
}
