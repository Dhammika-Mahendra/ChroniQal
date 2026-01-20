import React from 'react'

export default function AddItem({name,id,addFile}) {
return (
    <div
        style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 0',
            borderBottom: '1px solid #eee'
        }}
    >
        <p style={{ fontSize: '12px', lineHeight: '1.2',maxWidth:'130px'}}>{name}</p>
        <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ cursor: 'pointer' }}
            onClick={() => addFile(id)}
        >
            <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                clipRule="evenodd"
            />
        </svg>
    </div>
)
}
