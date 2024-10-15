import { MainPagesProps } from '../Main'

function Home({ pageName }: MainPagesProps) {
    return (
        <div>
            <h2>{pageName}</h2>
        </div>
    )
}

export default Home