import { actorFromIdlFactory } from 'ember-cli-dfinity';
import { idlFactory } from '../declarations/<%= dasherizedModuleName %>.did';

export default actorFromIdlFactory (idlFactory, '<%= classifiedModuleName %>Actor');
