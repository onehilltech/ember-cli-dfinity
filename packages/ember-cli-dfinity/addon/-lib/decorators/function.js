/*
 * Copyright (c) 2023 One Hill Technologies, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import decorator from '@onehilltech/decorator';
import { isArray } from 'lodash';

function actorFunction(target, key, descriptor, params) {
  let [type, input, output] = params;

  if (!isArray(input)) {
    input = input !== undefined ? [input] : [];
  }

  if (!isArray(output)) {
    output = output !== undefined ? [output] : [];
  }

  // Let's delete the original initializer because we don't need it.
  delete descriptor.initializer;

  // Define this action on the actor. This will allow the actor to create an
  // instance of itself.
  const definition = [input, output, type];
  target.defineAction(key, definition);

  descriptor.enumerable = true;
  descriptor.writable = false;
  descriptor.configurable = false;
  descriptor.value = definition;

  return descriptor;
}

export default decorator(actorFunction);

export function createFunctionDecorator(type) {
  return decorator(function (target, key, descriptor, params) {
    return actorFunction(target, key, descriptor, [type, ...params]);
  });
}
