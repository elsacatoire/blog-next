import React from "react";

type TextBoxProps = {
    title: string;
    items: string[];
    style: string;
};

const TextBoxEmphase = ({ title, items, style }: TextBoxProps) => {
    return (
        <div className={style}>
            <div className="h-full max-w-sm p-6 bg-gray-300 border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                {items.map((item, index) => (
                    <p key={index} className="font-normal text-gray-700 dark:text-gray-400">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default TextBoxEmphase;