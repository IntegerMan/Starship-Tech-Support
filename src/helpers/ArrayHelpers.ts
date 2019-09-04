export class ArrayHelpers {

  public static removeElement<T>(collection: T[], item: T, matcher?: (i) => boolean): T[] {
    let matchFunction = matcher;
    if (!matchFunction) {
        matchFunction = i => i === item;
    }

    const index = collection.findIndex(matchFunction);

    const cloned = collection.slice(0);

    if (index < 0) {
      return cloned;
    }

    cloned.splice(index, 1);

    return cloned;
  }

  public static clone<T>(items: T[]): T[] {
    return items.map(i => ({...i}));
  }
}
