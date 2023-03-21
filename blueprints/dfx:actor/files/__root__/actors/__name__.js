<% if (declaration) { %>
import { actorFromIdlFactory } from 'ember-cli-dfinity';
import { idlFactory } from '../declarations/<%= dasherizedModuleName %>.did';

export default actorFromIdlFactory (idlFactory, '<%= classifiedModuleName %>Actor');
<% } else { %>
import { Actor } from 'ember-cli-dfinity';

export default class <%= classifiedModuleName %>Actor extends Actor {

  }
<% } %>
