
export default function Layout({children}:{children: React.ReactNode}){
    return (
    <html>
        <body>
            <header
                style={{
                    backgroundColor: "lightblue",
                    padding:'1rem'
                }}
                >
                    <p>Header</p>
                </header>
            {children}
            <footer
                style={{
                    backgroundColor:"lightgreen",
                    padding:"1rem"
                }}
                >
                    <p> footer </p>
                </footer>
        </body>
    </html>
)
}