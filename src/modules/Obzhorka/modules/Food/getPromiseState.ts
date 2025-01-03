export const getPromiseState = <RpomiseType>(promise: Promise<RpomiseType>) => {
  const uniqueValue = {};
  return Promise.race([promise, Promise.resolve(uniqueValue)])
    .then((value) => (value === uniqueValue ? 'pending' : 'fulfilled'))
    .catch(() => 'rejected');
};
