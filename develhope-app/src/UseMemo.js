// Create a FilteredList component that receives a list of objects each containing a name, an id and an age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import { useMemo, useState } from "react";

export function FilteredList({ PList }) {

    const [people, setPeople] = useState(PList);

    useMemo(() => {
        setPeople(people.filter(el => el.age > 18));
    }, [PList]);

    return (
        <div>
            <ul>
                {people.map((el) => (
                    <li>{`my id is: ${el.id}, my name is: ${el.name}, i'm: ${el.age} years old.`}</li>
                ))}
            </ul>
        </div>
    );
}
