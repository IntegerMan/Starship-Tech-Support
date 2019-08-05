export class ArrayHelpers {

  public static removeElement<T>(collection: T[], item: T, matcher?: (i) => boolean): T[] {
    let matchFunction = matcher;
    if (!matchFunction) {
        matchFunction = i => i === item;
    }

    const index = collection.findIndex(matchFunction);

    const cloned = collection.slice(0);

    if (index < 0) {
      console.debug('Could not find element', item, cloned);
      return cloned;
    }

    cloned.splice(index, 1);

    console.debug('Removed from index ' + index, cloned);
    return cloned;
  }
}
