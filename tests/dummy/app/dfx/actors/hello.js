import { actorFromIdlFactory } from 'ember-cli-dfinity';
import { idlFactory } from '../declarations/hello.did';

export default actorFromIdlFactory (idlFactory);
