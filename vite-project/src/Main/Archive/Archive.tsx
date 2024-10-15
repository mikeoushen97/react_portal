import { MainPagesProps } from '../Main'
import ArchiveStyles from './ArchiveStyles.module.css'
import FilesCategoryGrid from './CategoryGrid/FilesCategoryGrid'

function Archive({ pageName }: MainPagesProps) {
    return (
        <div className={ArchiveStyles['archivePage']}>
            <h2>{pageName}</h2>
            <div className={ArchiveStyles['content']}>
                <FilesCategoryGrid />
            </div>
        </div >
    )
}

export default Archive