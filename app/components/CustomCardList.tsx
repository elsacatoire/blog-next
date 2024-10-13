import React from 'react'

type CustomCardListProps = {
    title: string,
    items: string[]
}

const CustomCardList = ({ title, items }: CustomCardListProps) => {
    return (
        <div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h1>
            <ul className="font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default CustomCardList
const title = "Backlog";
const items = ["Django, FAST API", "React Native", "Angular", "Docker"];