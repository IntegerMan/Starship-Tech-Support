export class ArrayHelpers {

  public static removeElement<T>(collection: T[], item: T): T[] {
    const index = collection.indexOf(item);
    if (index >= 0) {
      return collection.splice(index, 1);
    }
    return collection.slice(0);
  }
}
