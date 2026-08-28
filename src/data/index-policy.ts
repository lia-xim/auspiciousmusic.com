import policy from './index-policy.json';

const secondaryArchivePaths = new Set(policy.noindexArchivePaths);

export function isSearchLanding(path: string) {
  return !secondaryArchivePaths.has(path);
}

export const noindexArchivePaths = policy.noindexArchivePaths;
