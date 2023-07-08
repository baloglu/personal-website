import '../styles/main_content.css'

export default function MainContent({children}) {

    return (
        <div id="main_content" className="bg-teal-100">
            {children}
        </div>
    )
}