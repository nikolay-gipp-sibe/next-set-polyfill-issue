'use client';

import { ReactElement } from 'react';
// Without this import, union() doesn't work
// import 'core-js/features/set'

export function TestSetUnion(): ReactElement {
    const set: Set<unknown> = new Set([1, 2, 3]).union(new Set([1, 2]));
    return <div>Test Set Union {set.size}</div>;
}
