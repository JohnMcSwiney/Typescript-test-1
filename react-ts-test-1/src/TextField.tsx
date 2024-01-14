import React, {useState, useRef} from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    obj?:{
        f1: string
    }
    person?: Person
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null>(5); // can be either | is or
    // setCount(null)  || undefined is different from null

    const inputRef = useRef<HTMLInputElement>(null); //When in doubt, hover and see
    const divRef = useRef<HTMLDivElement>(null);

    return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange}></input>
    </div>
  )
};