import { actorFromIdlFactory } from 'ember-cli-dfinity';
import { idlFactory } from '../declarations/foo.did';

export default actorFromIdlFactory(idlFactory, 'FooActor');
