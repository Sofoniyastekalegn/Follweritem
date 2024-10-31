import "./List.css";

interface ListProps<T> {
    title: string;
    items: Array<T>;
    renderItem: (item: T) => JSX.Element;
    compareFn: (a: T, b: T) => number;
    getItemKey: (item: T) => string;
    vertical?: boolean;
    ascending?: boolean;


}

export function List<T>({
    items,
    title,
    renderItem,
    compareFn,
    getItemKey,
    vertical = true,
    ascending = true, 

}:  ListProps<T>) {
    const sortedItems = [...items].sort((a, b) => {
      const sign = ascending ? 1 : -1;
      return sign * compareFn(a, b);
    });
  
    return (
      <div>
        <h3 className="title">{title}</h3>
        <div className={`list ${vertical ? "vertical" : ""}`}>
          {sortedItems.map((item) => (
            <div key={getItemKey(item)}>{renderItem(item)}</div>
          ))}
        </div>
      </div>
    );
  }
  