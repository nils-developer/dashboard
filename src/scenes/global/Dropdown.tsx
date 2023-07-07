import React, {useState} from 'react';

type Props = {
    className: string
}

export const DropdownMenu = ({className}: Props) => {
    const [selectedOption, setSelectedOption] = useState('')
    const [isHovered, setIsHovered] = useState(false)

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <label className={className}>Stocks</label>
            <select
                className={
                    `${isHovered ? 'block' : 'hidden'} ${className} w-full bg-emerald-500`
                }
                id="stocks"
                value={selectedOption}
                onChange={handleOptionChange}
                size={2}
                style={{overflow: isHovered ? 'hidden' : 'auto'}}
            >
                <option>Add</option>
                <option>List</option>
            </select>
        </div>
    )
}