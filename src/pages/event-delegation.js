import React from 'react'

const EventDelegation = () => {
    const authors = [
        { id: 1, name: "J.K. Rowling" },
        { id: 2, name: "George Orwell" },
        { id: 3, name: "Jane Austen" },
        { id: 4, name: "Mark Twain" },
        { id: 5, name: "Ernest Hemingway" },
    ];

    const handleDelete = (e) => {
        const id = e.target.getAttribute("data-id");
        const item = authors.find((item) => item.id === Number(id));
        alert(JSON.stringify(item));
    }

    return (
        <div className='flex flex-col items-center gap-6 p-6'>
            <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
                <h2 className="text-xl font-semibold mb-3">Authors</h2>
                <ul
                    className="list-disc list-inside"
                    onClick={(e) => handleDelete(e)}
                >
                    {authors.map((author) => (
                        <li key={author.id} data-id={author.id} className="text-gray-700 cursor-pointer">
                            {author.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EventDelegation
