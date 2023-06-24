import { FilteredList } from "./UseMemo";

export function App() {

    const pippo = [
        {name: 'pino', id: 1, age: 20},
        {name: 'pippo', id: 2, age: 17},
        {name: 'pinocchio', id: 3, age: 13},
        // {name: 'franco', id: 4, age: 20},
        {name: 'franchino', id: 5, age: 34}
    ]

    return (
        <div>
            <FilteredList PList={pippo} />
        </div>
    )
}