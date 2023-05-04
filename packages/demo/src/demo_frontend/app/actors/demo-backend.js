
import { actorFromIdlFactory } from 'ember-cli-dfinity';
import { idlFactory } from '../declarations/demo_backend.did';

export default actorFromIdlFactory (idlFactory, 'DemoBackendActor');

