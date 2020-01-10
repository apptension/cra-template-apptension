import loadable from '@loadable/component';

export const asyncComponent = (asyncLoader, exportedAs) => {
  return loadable(async () => {
    const module = await asyncLoader();
    return exportedAs ? module[exportedAs] : module;
  });
};
