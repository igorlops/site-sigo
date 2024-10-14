export function ScrollIcon() {
    return (
        <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="10" width="40" height="70" rx="20" ry="20" fill="none" stroke="#fff" strokeWidth="2"/>
            <circle cx="50" cy="10" r="5" fill="#fff">
                <animate attributeName="cy" values="40;60" dur="2.5s" repeatCount="indefinite"/>
            </circle>
        </svg>
    )
}