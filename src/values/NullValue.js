/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */

import { PrimitiveValue } from "./index.js";

export default class NullValue extends PrimitiveValue {
  _serialize(): null {
    return null;
  }

  mightBeFalse(): boolean {
    return true;
  }

}
